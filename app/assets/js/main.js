new Vue({
    el: "#app",
    data: {
        disks: "",
        searchedArtist: ""
    },
    methods: {
        getData() {
            axios
                .get("http://localhost:63342/php-ajax-dischi/server/get_data.php")
                .then(response => {
                    this.disks = response.data;
                })
        },
        search() {
            let obj = {
                params: {
                     artist: this.searchedArtist
                }
            }

            axios
                .get("http://localhost:63342/php-ajax-dischi/server/search.php", obj)
                .then(response => {
                    if (response.data.length !== 0) {
                        this.disks = response.data;
                    }
                    else if (!this.searchedArtist)
                        this.getData();
                    else
                        this.disks = [];
                })
        }
    },
    created() {
        this.getData();
    }
});