const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {
    id: 1,
    post_content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget ornare velit, eu consectetur lacus. Donec eget vestibulum nisl. Cras ut magna et libero pulvinar gravida sed feugiat ipsum. Nulla blandit ullamcorper dui at imperdiet. Maecenas consequat aliquet quam, vitae fermentum ligula pretium et.',
    title: 'Handlebars Docs',
    created_at: new Date(),
    comments: [{}, {}],
    user: {
      username: 'test_user'
    }
  });
});

module.exports = router;