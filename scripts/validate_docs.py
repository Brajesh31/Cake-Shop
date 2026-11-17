#!/usr/bin/env python3
"""Validate relative Markdown links in repository documentation.

External links are not fetched. Anchor fragments are ignored because GitHub's
heading-anchor algorithm can differ for punctuation and duplicate headings.
"""

from __future__ import annotations

import re
import sys
from pathlib import Path
from urllib.parse import unquote

ROOT = Path(__file__).resolve().parents[1]
MARKDOWN = re.compile(r"(?<!!)\[[^\]]*\]\(([^)]+)\)")


def local_target(source: Path, raw_target: str) -> Path | None:
    target = raw_target.strip().split()[0].strip("<>")
    if not target or target.startswith(("#", "mailto:", "tel:")):
        return None
    if re.match(r"^[a-zA-Z][a-zA-Z0-9+.-]*://", target):
        return None
    path = unquote(target.split("#", 1)[0].split("?", 1)[0])
    if not path:
        return source
    candidate = (source.parent / path).resolve()
    try:
        candidate.relative_to(ROOT)
    except ValueError:
        return candidate
    return candidate


def main() -> int:
    errors: list[str] = []
    for source in ROOT.rglob("*.md"):
        if any(part in {".git", "node_modules", "dist"} for part in source.parts):
            continue
        text = source.read_text(encoding="utf-8")
        for match in MARKDOWN.finditer(text):
            raw = match.group(1)
            candidate = local_target(source, raw)
            if candidate is None:
                continue
            if not candidate.exists():
                line = text.count("\n", 0, match.start()) + 1
                errors.append(f"{source.relative_to(ROOT)}:{line}: missing {raw}")
    if errors:
        print("\n".join(errors), file=sys.stderr)
        return 1
    print("Documentation link validation passed.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
