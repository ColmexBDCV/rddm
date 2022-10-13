
export default {
    name: 'docs',
    props: ['docs', 'keyword'],
    template: "#docs",
    methods: {
        get_url(){
            return this.$store.getters['principal/base_url']
        },
        check_metadata(metadata, key) {

            if (!field_filter(key))
                return false

            if (typeof metadata == "object")
                if (metadata == null || metadata.length < 1) {
                    return false
                }

            if (typeof metadata === "string")
                if (metadata == "") {
                    return false
                }


            return true
        },
        reload(params){
            this.$router.push({path:"/search?" + params});
            this.$router.go();
        },
        isObject(o) {
            //console.log("keyword: " + this.keyword);
            return typeof o == "object"
        }
    }
}