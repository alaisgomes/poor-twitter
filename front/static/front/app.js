new Vue({ 
    el: '#app',
    data() {
        return {
            apiUrl: 'api/', 
            
            tweet: {
                name: '',
                text: '',
            },
            tweets: [],

            currentKey: 'creation_date',
            currentDirection: 'desc',
            validTweet: true,
        }
    },
    created() {
        var _this = this;
        $.ajax({
            url: this.apiUrl,
            method: 'GET',
            success: function (response) {
                _this.tweets = response;
            }
        });
    },
    methods: {
        validate() {
            return this.tweet.name && this.tweet.text
        },
        sortTweetsBy(key) {
            if(key === this.currentKey) {
              this.currentDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            }
            this.currentKey = key;
        },
        addTweet() {
            this.validTweet = this.validate()
            if (this.validTweet) {
                var _this = this;
                $.ajax({
                    url: this.apiUrl,
                    method: 'POST',
                    data: _this.tweet,
                    success: function (response) {
                        _this.tweets.unshift(response);
                    }
                });
            }
        } 
    },
    computed: {
        sortTweets() {
            return this.tweets.sort((a,b) => {
              let modifier = 1;
              if(this.currentDirection === 'desc') modifier = -1;
              if(a[this.currentKey] < b[this.currentKey]) return -1 * modifier;
              if(a[this.currentKey] > b[this.currentKey]) return 1 * modifier;
              return 0;
            });
          }
    },
});