from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
files = list(ROOT.glob("*.html")) + list(ROOT.glob("*.js"))
assert files, "no movie search source found"
text = "\n".join(p.read_text(encoding="utf-8") for p in files).lower()
assert "search" in text
print("Movie Search App smoke check passed")
