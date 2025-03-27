class Blog {
  constructor() {
    this.blogPosts = [];
    this.authors = [];
    this.genres = [];
    this.comments = [];
  }

  getBlogPosts(){
    if (this.blogPosts.length == 0){
      return 'There are 0 blog posts';
    }
    else{
      return this.blogPosts;
    }
  }

  addBlogPost(post, author, genre, comment){
    this.blogPosts.push(post);
    this.authors.push(author);
    this.genres.push(genre);
    this.comments.push(comment);
  }

  getBlogAuthors(){
    return this.authors;
  }

  getSpecificBlogAuthor(post, author){
    for(var i = 0; i < this.blogPosts.length; i++){
      if(this.blogPosts[i] == post && this.authors[i] != null){
        return this.authors[i];
      }
      else if(this.blogPosts[i] == post && this.authors[i] == null){
        return 'Blog has no author';
      }
    }
    return 'No such blog post';
  }

  getBlogsFromGenre(genre){
    const tempData = [];
    for(var i = 0; i < this.genres.length; i++){
      if(this.genres[i] == genre){
        tempData.push({title: this.blogPosts[i], author: this.authors[i], genre: this.genres[i]});
      }
    }
    return tempData;
  }

  getAllGenres(){
    if(this.genres.length == 0){
      return 'There are no genres available';
    } else{
      return this.genres;
    }
  }

  addComment(post, user, comment){
    tempData = [];
    for(var i = 0; i < this.blogPosts.length; i++){
      if(this.blogPosts[i] == post){
        tempData.push({user: user, comment: comment})
      }
    }
  }

  getBlogComments(post){
    tempData = [];
    for(var i = 0; i < this.blogPosts.length; i++){
      if(this.blogPosts[i] == post){
      }
    }
  }
}


module.exports = Blog;