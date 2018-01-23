const expect = require('chai').expect
const spies = require('chai-spies');
const chai = require('chai');
chai.use(spies);
let {Page} = require('../models');
let {db} = require('../models');


let page;

describe('Page model', function() {
  before(function() {
    return Page.sync({force: true});
  })
  // describe('the validations', function() {
  //   it('errors without title')

  //   it('errors without content')

  //   it('errors given an invalid status')
  // })

  describe('the virtuals', function() {
    beforeEach(function() {
      page = Page.build();
    });
    describe('route', function() {
      it('returns a valid url, prepended by "/wiki/"', function() {
        page.urlTitle = 'tester_url_title';
        expect(page.route).to.equal('/wiki/tester_url_title')
      })

    })

    describe('rendered content', function() {
      it('converts format to HTML', function() {
        page.content = 'some content';
        expect(page.renderedContent).to.equal('<p>some content</p>\n')
      })


    })
  });

//   describe('hooks', function() {
//     describe('beforeValidate')
//       it('it turns the title into a urlTitle')
//   })



  describe('class methods', function() {
    beforeEach(function(done) {
      Page.create({
        title: 'new title',
        content: 'I am some content',
        tags: ['tag1', 'tag2']
      }).then(function() {
        done();
      })
      .catch(done);
    });
    describe('find by tag', function() {
      it('finds a page by its tag', function(done) {
        Page.findByTag('tag1')
        .then(function(pages) {
          expect(pages).to.have.lengthOf(1);
          done();
        })
        .catch(done);
      })
      it('Does not return pages w/o that tag', function(done) {
        Page.findByTag('tag3')
        .then(function(pages) {
          expect(pages).to.have.lengthOf(0);
          done();
        })
        .catch(done);
      })
    })
  })

//   describe('instance methods', function() {
//     describe('find similar')
//       it('finds pages with any common tag')
//       it('doesn\'t return itself')
//   })
})
