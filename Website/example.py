from search import WebCrawler


user_id = '123456'
start_url = 'https://stackoverflow.com/questions/27766651/parsing-using-lxml-and-requests-with-python'
max_level = 2
persist = False

crawler = WebCrawler(user_id)
search_result = crawler.bfs(start_url=start_url, max_level=max_level, persist=persist)

print 'RESULTS'
print '---------------------------'
print '\n'.join(search_result)
