const express = require("express")
const router = new express.Router();
const Blog = require("../models/blogsModel")

router.get('/',async (req,res)=>{
    try {
        const blog = await Blog.find().lean();
        if (!blog) {
            res.status(400).send()
        }else{
            res.render('blogs',{blog});

        }
        
    } catch (error) {
        console.log(error);
    }

})

router.get('/blogpost/:id',async (req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            res.status(400).send()
        }else{
            // res.status(200).send(blog)
            // todo: 
            // 1.) add published on!
            // console.log(blog.publishedOn.getDate());
            res.render('blogPost',{blog})
        }
        
    } catch (error) {
        console.log(error);
    }

})

router.post('/blogpost',async (req,res)=>{
    try {
        const blog = new Blog(req.body)
        
        if (!blog) {
            res.status(400).send()
        }else{
            const createdBlog = await blog.save()
            res.status(200).send(createdBlog)
        }
        
    } catch (error) {
        console.log(error);
    }

})

router.patch('/blogpost/:id',async (req,res)=>{
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(req.params.id,req.body,{new:true})
        
        if (!updatedBlog) {
            res.status(400).send()
        }else{
            res.status(200).send(updatedBlog)
        }
        
    } catch (error) {
        console.log(error);
    }

})

router.delete('/blogpost/:id',async (req,res)=>{
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.params.id)

        if (!deletedBlog) {
            res.status(400).send()
        }else{
            res.status(200).send(deletedBlog)
        }
        
    } catch (error) {
        console.log(error);
    }

})

module.exports = router