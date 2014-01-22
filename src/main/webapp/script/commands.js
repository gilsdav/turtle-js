function Commands(turtleLoader) {
  function withoutSave(f) {
    return function() {
      var result = f.apply(this, arguments)
      repl.skipHistory()
      return result
    }
  }
  function withAuthor(f) {
    var author = $("#nick").val()
    if (!author) {
      return "Who are you? Type login <yourname>"
    } else {
      return f(author)
    }
  }
  function syncAjax(params) {
    var result
    params.async = false
    $.ajax(params).then(function(x) {
      result = x
    })
    return result
  }
  window.login = withoutSave(function(name) {
    $("#nick").val(name).trigger("keyup")
  })
  window.open = withoutSave(function(name) {
    return withAuthor(function(author) {
      turtleLoader.load("/turtle/" + author + "/" + name)
    })
  })
  window.save = withoutSave(function(name) {
    return withAuthor(function(author) {
      $("#description").val(name).trigger("keyup")
      $("#share button").trigger("click")
    })
  })
  window.ls = withoutSave(function() {
    return withAuthor(function(author) {
      var turtles = syncAjax({url: "/turtles/" + author})
      var names = _.sortBy(_.uniq(turtles.map(function(t) { return t.content.description })), _.identity)
      return names
    })
  })
  window.whoami = withoutSave(function() {
    return withAuthor(_.identity)
  })
}