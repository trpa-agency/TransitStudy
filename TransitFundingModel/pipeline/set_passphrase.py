"""Set or change the passphrase for the full funding model page.

Asks for the passphrase twice (it is never shown or saved), then writes only its SHA-256 hash,
salted with gate.salt, into editions/config.yaml. Run build_editions.bat afterward to publish.
Usage, from pipeline/:  propy set_passphrase.py
"""
import getpass, hashlib, re, sys
from pathlib import Path
import yaml

cfg_path = Path(__file__).resolve().parent / "editions" / "config.yaml"
text = cfg_path.read_text(encoding="utf-8")
salt = yaml.safe_load(text)["full"]["gate"]["salt"]
p1 = getpass.getpass("New passphrase: ")
if len(p1) < 8:
    print("Use at least 8 characters. Nothing was changed."); sys.exit(1)
if getpass.getpass("Type it again: ") != p1:
    print("The two entries did not match. Nothing was changed."); sys.exit(1)
h = hashlib.sha256((salt + p1).encode("utf-8")).hexdigest()
new, n = re.subn(r"(\n    hash: )'[^'\n]*'", lambda m: m.group(1) + "'" + h + "'", text, count=1)
if n != 1:
    print("Could not find gate.hash in editions/config.yaml. Nothing was changed."); sys.exit(1)
cfg_path.write_text(new, encoding="utf-8", newline="\n")
print("Passphrase set. Only its hash is saved in editions/config.yaml.")
print("Next: run build_editions.bat to publish, then commit. Share the passphrase only with people who need it.")
