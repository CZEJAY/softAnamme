import requests
from bs4 import BeautifulSoup
url = "https://techcrunch.com"

response = requests.get(url)

if response.status_code == 200:
    html = response.content
else:
    print("Failed to retrieve the webpage")

soup = BeautifulSoup(html, "html.parser")

headings = soup.find_all("h2")

for heading in headings:
    print(heading.text)