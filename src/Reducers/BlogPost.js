const myData = {

    AllPosts :[],
    post:"",
}

const BlogPost = (state=myData, action)=>{

        switch (action.type){

            case "ALL_POST" :

            return {
                ...state,
                AllPosts:action.payload
            }

            case "SINGLE_POST" :

            return {
                ...state,
                post:action.payload
            }

            case "CR_POST" :

            return{
                ...state,
                AllPosts:[action.payload , ...state.AllPosts]
            }

            default :

            return state


        }

}

export default BlogPost