# How to work

1 - create gulp task in `gulpfile.js`

```
gulp.task('build-online-marketplace', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/build-online-marketplace.nunjucks')
  // Add data 
  .pipe(data(function() {
    return require('./data/build-online-marketplace.json')
  }))
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});
```
2 - Create file `/data/{pagename}.json`

```
{
  "baseUrl" : "https://mymarketplacebuilder.com",
  "title" : "QUIZ LANDER2: [Start Up Trial Page] - My Marketplace Builder",
  "description" : "What Marketplace Fits You Best? This quiz will help you assess the best marketplace package to fit your needs.",

  "sections" : [
    {
      "partial" : "quiz"
    }
  ]
  
}
```

3 -Create `/app/pages/{pagename}.html`

```
{% extends "layout.nunjucks" %}

{% block content %}
  {% if inner_banner %}
    {% include 'banner/' + inner_banner.partial + '.nunjucks' ignore missing %}
  {% endif %}
  <div class="middle-container">
    {% for section in sections %}
      {% include 'section/' + section.partial + '.nunjucks' ignore missing %}
    {% endfor %}
  </div>
{% endblock %}
```
the template goes through the section object and includes the partial file in `/app/templates/section`




