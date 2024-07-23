{
    "title": "{{ replace .File.ContentBaseName "-" " " | title }}",
    "slug": "{{ replace .File.ContentBaseName "-" " " | title }}",
    "date": "{{ .Date }}",
    "tags": [
        "雑記"
    ],
    "draft": true
}
