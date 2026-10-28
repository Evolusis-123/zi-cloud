import os, re, glob, sys
from html.parser import HTMLParser
DIST = 'dist'
ids = {}
links = []
class P(HTMLParser):
    def __init__(self, f):
        super().__init__(); self.f = f
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: ids.setdefault(self.f, set()).add(a['id'])
        if tag == 'a' and 'href' in a: links.append((self.f, a['href']))
        if tag in ('link','script','img') and ('href' in a or 'src' in a):
            links.append((self.f, a.get('href') or a.get('src')))
files = glob.glob(f'{DIST}/**/*.html', recursive=True)
for f in files:
    P(os.path.relpath(f, DIST)).feed(open(f, encoding='utf8').read())
bad = []
for src, href in links:
    if not href or href.startswith(('http', 'mailto', 'tel', 'data:', 'javascript')):
        continue
    path, _, frag = href.partition('#')
    if path == '':
        target = src
    elif path.startswith('/'):
        target = path.lstrip('/')
    else:
        target = os.path.normpath(os.path.join(os.path.dirname(src), path))
    if target == '' : target = 'index.html'
    if target.endswith('/'): target += 'index.html'
    if not os.path.exists(os.path.join(DIST, target)):
        bad.append((src, href, 'missing file')); continue
    if frag and target.endswith('.html'):
        if frag not in ids.get(target, set()) and frag not in ids.get(src, set()):
            bad.append((src, href, 'missing anchor'))
print('files', len(files), 'links checked', len(links))
for b in bad: print('BAD', b)
emd = []
for f in files:
    t = open(f, encoding='utf8').read()
    if '—' in t or '–' in t: emd.append(f)
print('dash files', emd)
