new Vue({ 
    el: '#app',
    data() {
        return {
            api_url: 'api/', 
            tweet: {
                name: '',
                text: '',
                creation_date: '',
            },
            submitted: false,
            tweets: null,
        }
    },
    mounted() {
        _this = this;
        $.ajax({
            url: this.api_url,
            method: 'GET',
            success: function (response) {
                _this.tweets = response;
            }
        });
    },
    methods: {
        addTweet() {
            var _this = this;
            $.ajax({
                url: this.api_url,
                method: 'POST',
                data: _this.tweet,
                success: function (response) {
                    _this.tweets.unshift(response);
                }
            });
        },


    }
})