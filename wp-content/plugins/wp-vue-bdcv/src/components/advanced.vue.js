export default{
    name: 'advanced',
    template: '#advanced',
    components: {

    },
    data() {
        return {
            search: "",
            collection: "todo",
            search_in: "all_fields",
            all_fields: "",
            title: "",
            resource_type: "",
            author: "",
            contributor: "",
            center: "",
            thesis_advisor: "",
            editor: "",
            compiler: "",
            reviewer: "",
            place_of_publication: "",
            sumary: "",
            publisher: "",
            year: "",
            subject_work: "",
            subject_person: "",
            corporate_name: "",
            subject: "",
            language: "",
            based_near_label: "",
            geographic_coverage: "",
            temporary_coverage: "",
            degree_program: "",
            type_of_illustrations: "",
            contained_in: "",
            photographer: "",
            search_type:"OR",
        }
    },
    methods:{
        send_data(){

            //this.$router.push({name:'search', params: {'keyword': this.search}});
            this.$router.push('/search?keyword=' + this.search + '&filter=' + this.collection + "&search_in=" + this.search_in);
        },
        create_json(){
            let json_data = {
                "data":{
                    "all_fields": this.all_fields,
                    "title": this.title,
                    "creator": this.author,
                    "resource_type": this.resource_type,
                    "contributor": this.contributor,
                    "center": this.center,
                    //"thesis_advisor": this.thesis_advisor,
                    "editor": this.editor,
                    "compiler": this.compiler,
                    "reviewer": this.reviewer,
                    "place_of_publication": this.place_of_publication,
                    "description": this.sumary,
                    "publisher": this.publisher,
                    "f[date_created_sim][]": this.year,
                    "subject_work": this.subject_work,
                    "subject_person": this.subject_person,
                    "subject_corporate": this.corporate_name,
                    "subject": this.subject,
                    "language": this.language,
                    "based_near_label": this.based_near_label,
                    "geographic_coverage": this.geographic_coverage,
                    "temporary_coverage": this.temporary_coverage,
                    "director": this.thesis_advisor,
                    "degree_program": this.degree_program,
                    "type_of_illustrations": this.type_of_illustrations,
                    "contained_in": this.contained_in,
                    "photographer": this.photographer,
                    "op": this.search_type,
                }                
            }
            return json_data;
        },
        search_advanced(){
            this.$router.push('/search?keyword=' + this.search + '&filter=' + this.collection + "&search_in=advanced&json_data=" + JSON.stringify(this.create_json()));
        }
    }
}