const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema;
const slug = require('slugs');

const postSchema = new Schema({
    title: {
        type: String,
        required: "Please type post title"
    },
    slug: String,
    content: {
        type: String,
        required: "Please type post content"
    },

})

postSchema.pre('save', async function(next) {
    if (!this.isModified('title')) {
      next(); // skip it
      return; // stop this function from running
    }
    this.slug = slug(this.title);
    // find other stores that have a slug of wes, wes-1, wes-2
    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i');
    const storesWithSlug = await this.constructor.find({ slug: slugRegEx });
    if (storesWithSlug.length) {
      this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
    }
    next();
    // TODO make more resiliant so slugs are unique
});

module.exports = mongoose.model('Post', postSchema)

/* 
{"_id": {"$oid":"60439277d0dc8b22c7949ced"},
"userId":1,
"id":1,
"title":"sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
"body":"quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"} */