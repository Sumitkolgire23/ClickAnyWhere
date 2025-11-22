"""fetch_tranco.py
Requires: pip install tranco requests
This script downloads the latest Tranco list and creates a JSON of top N domains.
Run: python fetch_tranco.py --n 10000 --out ../database/all_sites_placeholder.json
"""
import argparse, json
from tranco import Tranco

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--n', type=int, default=10000)
    parser.add_argument('--out', type=str, default='../database/all_sites_placeholder.json')
    args = parser.parse_args()
    t = Tranco()
    # download list
    lis = t.list().top(args.n)
    urls = ['https://' + d for d in lis]
    with open(args.out,'w') as f:
        json.dump({'all': urls}, f, indent=2)
    print('Wrote', len(urls), 'domains to', args.out)

if __name__=='__main__':
    main()
