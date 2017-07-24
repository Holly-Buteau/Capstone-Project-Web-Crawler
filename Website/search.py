from web import HTMLPage, Link
from errors import ArgumentError


class WebCrawler(object):
    """A Crawler instance that is attached to a User (by his/her UserID)

    With this instance, BFS/DFS can be performed from any given URL and the
    results can be retrieved or optionally persisted on a database (with
    the UserID being a part of the primary key of most tables)
    """
    def __init__(self, user_id):
        """Associates the WebCrawler instance to a User

        Args:
            user_id (str): A string that represents a UserID
        """
        self.user_id = user_id

    def bfs(self, start_url, max_level, stop_words=[],
    allowed_domains=[], persist=True):
        """Starts from the given URL and performs a Breadth First Search until
        a maximum level is reached or until one of the given stop words are
        encountered

        Args:
            start_url (str): Search starting point
            max_level (int): The maximum level until which the search should
                be performed
            stop_words (list(str), optional): The list of words which is to be
                checked for to halt the current search
            allowed_domains (list(str), optional): The list of domains to
                restrict the URLs to, while performing the search
            persist (bool, optional): If True, the search results will be
                persisted in the database

        Returns:
            set(str): A list of unique Link objects encountered while performing
                the breadth first search

        Raises:
            ArgumentError: If arguments are faulty
        """
        # validate args
        start_link = Link(start_url)
        if not start_link.is_valid:
            raise ArgumentError('Invalid Start URL: %s' %start_link.url)
        if not isinstance(max_level, int):
            raise ArgumentError('Param "max_level" must be an integer. ' \
                'Got: %s' %max_level)

        # add the current domain to the list of allowed domains
        if not start_link.domain in allowed_domains:
            allowed_domains.append(start_link.domain)

        # initiate the BFS data structures
        visited = set()
        queue = [ start_link ]
        stop_word_hit = False

        # BFS
        while queue and not stop_word_hit:
            link = queue.pop(0)
            if link not in visited:
                # visit the current link
                visited.add(link.id)

                # parse current page and get all child links
                page = HTMLPage(link)
                if page.status_code == 200 and link.level < max_level:
                    queue += page.get_links(allowed_domains)
                print page

                # check if the current page has one of the given stop words
                for word in stop_words:
                    stop_word_hit = stop_word_hit or page.has_word(word)

        if persist:
            # save to DB
            pass

        return visited

    def dfs(self, start_url, max_level, stop_words=[],
    allowed_domains=[], persist=True):
        """Starts from the given URL and performs a Depth First Search until
        a maximum level is reached or until one of the given stop words are
        encountered

        Args:
            start_url (str): Search starting point
            max_level (int): The maximum level until which the search should
                be performed
            stop_words (list(str), optional): The list of words which is to be
                checked for to halt the current search
            allowed_domains (list(str), optional): The list of domains to
                restrict the URLs to, while performing the search
            persist (bool, optional): If True, the search results will be
                persisted in the database

        Returns:
            set(str): A list of unique Link objects encountered while performing
                the depth first search
        """
        pass
