from search import WebCrawler


user_id = '123456'
crawler = WebCrawler(user_id)

search_options = {
    'search_type': 'DFS', # or 'BFS'
    'start_url': 'http://docs.peewee-orm.com/en/latest/peewee/querying.html',
    'max_level': 2,
    'persist': False
}
search_result = crawler.search(**search_options)

print '---------------------------'
print 'RESULTS'
print '---------------------------'
print '\n'.join([str(x) for x in search_result])
print '---------------------------'
print 'TOTAL RESULTS: %s' %len(search_result)
