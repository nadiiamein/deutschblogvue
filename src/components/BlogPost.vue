<template>
<div class="blog-wrapper no-user"> 
<div class="blog-content">
    <div>
    <h2 v-if="post.welcomeScreen">{{post.title}}</h2>
            <h2 v-else>{{post.title}}</h2>
                    <p v-if="post.welcomeScreen">{{post.blogPost}}</p>
                            <p class="content-preview" v-else>{{post.blogHTML}}</p>
<router-link class="link link-light" v-if="post.welcomeScreen" to="#">
    Registrieren/Login <Arrow class="arrow arrow-light" />
</router-link>
                                
 <router-link class="link " v-else to="#" >
     Zum Post<Arrow class="arrow" />
 </router-link>
                                
    </div>
  </div>
  <div class="blog-photo">
    <img v-if="post.welcomeScreen" :src="require(`../assets/blogPhotos/${post.photo}.jpg`)" alt="" />
        <img v-else :src="require(`../assets/blogPhotos/${post.blogCoverPhoto}.jpg`)" alt="" />

    </div>
</div>
</template>

<script>
import Arrow from "../assets/icons/arrow-rights-light.svg";
export default {
    name: "blogPost",
    props: ["post"],
    components: {
        Arrow,
    }
};
</script>

<style lang="scss" scoped>
.blogßwrapper{
    display: flex;
    flex-direction: column;
    box-schadow: 0 4px 6 px -1px rgba(0, 0, 0, 0), 0 2px 4px -1 rgba(0, 0, 0, 0.65);
    @media(min-width: 700) {
        min-height: 650px;
        max-height: 650px;
        flex-direction: row;
    }

    .blog-content {
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 4;
        order: 2;
        @media (min-width: 700px) {
            order: 1;
        }

        @media(min-width: 800) {
            flex: 3;
        }

        div{
            max-width: 375px;
            padding: 72px 24px;
            @media (min-width: 700px) {
            padding: 0 24px;
        }

        h2{
            font-size: 32px;
            font-weight: 300;
            text-transform: upprcase;
            margin-bottom: 24px;
 @media (min-width: 700px) {
            font-size: 40px;
        }
        }

        p{
         font-size: 15px;
            font-weight: 300;   
            line-height: 1,7;
        }

        .content-preview{
             font-size: 13px;
            max-height: 24px;
            weight: 250;  
           white-space: nowrap;
           overflow: hidden;
           text-overflow: ellisis;
        }
        .link{
            display: inline-flex;
            align-items: center;
            margin-top: 32px;
            padding-bottom: 4px;
            border-bottom: 1px solid transparent;
            transition: .5s ease-in all;

            &:hover {
                border-bottom-color: #303030;
            }
        }

        .link-light{
           &:hover{
               border-bottom-color: #ffff;
           } 
        }
    }

 

 .blog-photo{
     order: 1;
     flex: 3;
     box-schadow: 0 4px 6 px -1px rgba(0, 0, 0, 0), 0 2px 4px -1 rgba(0, 0, 0, 0.65);
 @media (min-width: 700px) {
order: 2;
           }
         @media (min-width: 700px) {
     flex: 4;        }
 }

 img{
     display: block;
     width: 100%;
     height: 100%;
     object-fit: cover;
 }
}

&:nth-child(even) {
    .blog-content{
        order: 2;
    }
    .blog-photo {
        order: 1;
    }
}
}

.no-user:first-child {
    .blog-content{
        background-color: #303030;
        color: #fff;
    }
}

</style>