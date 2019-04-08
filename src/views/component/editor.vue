<template>
    <div class="editor-container">
        <p class="expain">富文本编辑器是重要并且核心的功能，我们最终选择了vue2-editor，轻量高效，详细请见官方<a href="https://www.awesomes.cn/repo/davidroyer/vue2-editor" target="_blank">文档</a></p>
        <vue-editor id='editor' useCustomImageHandler @imageAdded="handleImageAdded" v-model="content"></vue-editor>
    </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'
import {upload} from '@/api/api.js'
export default {
    components: {
      VueEditor
   },
    data() {
       return {
         content: '<h1>你好，zyh</h1>'  
       }
     },
     methods:{
         /** 
          * @param {Object} file 图片参数
          * @param {Object} Editor 编辑器实例
         */
         handleImageAdded(file, Editor, cursorLocation){
            let formData=new FormData();
            formData.append('image',file)
            //上传图片
            upload(formData).then(res=>{
                let  url = res.data.url 
                Editor.insertEmbed(cursorLocation, 'image', url);
            }).catch(e=>{

            })
         }
     }
}
</script>

<style >
.editor-container{
    padding: 40px;
    
}
.expain{
    font-size: 16px;
    line-height: 60px;
    background: #F2F6FC;
    margin-bottom: 20px;
}
.expain a{
    color: #bdb7ff
}
#editor{
    height: 400px;
}

</style>

