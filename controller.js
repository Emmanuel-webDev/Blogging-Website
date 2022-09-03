 async function getBlog(req, res){
    let blog = await Blog.findOne({ slug: req.params.slug });
    // the await keyword is used to wait for the promise to be resolved
    
    // findOne() => this method finds and returns the first document that matches the query criteria.
    if(blog){
        res.render('show', {blog:blog});
    } else{
        res.redirect('/');
    }
}

modules.exports = {
  getBlog : getBlog
}
