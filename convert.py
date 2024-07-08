import toml
import json

# TOMLファイルのパス
toml_file = 'hugo.toml'
# JSONファイルのパス
json_file = 'hugo.json'

# TOMLファイルを読み込む
with open(toml_file, 'r', encoding="utf-8") as f:
    toml_content = toml.load(f)

# JSONファイルに書き込む
with open(json_file, 'w') as f:
    json.dump(toml_content, f, indent=2)

print(f"Converted {toml_file} to {json_file}")
