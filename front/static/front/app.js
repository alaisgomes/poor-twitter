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
            currentDirection: 'asc',

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
        sortTweetsBy(key) {
            if(key === this.currentKey) {
              this.currentDirection = this.currentDirection === 'asc' ? 'desc' : 'asc';
            }
            this.currentKey = key;
        },
        addTweet() {
            $.ajax({
                url: this.apiUrl,
                method: 'POST',
                data: _this.tweet,
                success: function (response) {
                    _this.tweets.unshift(response);
                }
            });
        } 
    },
    computed: {
        sortTweets() {
            return this.tweets.sort((a,b) => {
              let modifier = 1;
              console.log(a, b);
              if(this.currentDirection === 'desc') modifier = -1;
              if(a[this.currentKey] < b[this.currentKey]) return -1 * modifier;
              if(a[this.currentKey] > b[this.currentKey]) return 1 * modifier;
              return 0;
            });
          }
    },
});