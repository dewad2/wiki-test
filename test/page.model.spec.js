const expect = require('chai').expect
const spies = require('chai-spies');
const chai = require('chai');
chai.use(spies);
let {Page} = require('../models');


let page;

beforeEach(function() {
  page = Page.build();
})



describe('Page model', function() {
  // describe('the validations', function() {
  //   it('errors without title')

  //   it('errors without content')

  //   it('errors given an invalid status')
  // })

  describe('the virtuals', function() {
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

//   describe('class methods', function() {
//     describe('find by tag')
//       it('finds a page by its tag')
//   })

//   describe('instance methods', function() {
//     describe('find similar')
//       it('finds pages with any common tag')
//       it('doesn\'t return itself')
//   })
})
