// jQuery script to close the navbar when a navigation link is clicked
$(document).ready(function () {
  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide')
  })
})

$(window).on('resize', function () {
  if ($(window).width() > 992) {
    $('.navbar-collapse').collapse('hide')
  }
})

$(document).ready(function () {
  // Function to update URL fragment based on the current section in view
  function updateURLFragment() {
    var scrollPosition = $(window).scrollTop()
    var foundSection = false

    $('section').each(function () {
      var top = $(this).offset().top
      var bottom = top + $(this).outerHeight()

      if (scrollPosition >= top && scrollPosition < bottom) {
        var id = $(this).attr('id')
        history.replaceState(null, null, '#' + id)
        foundSection = true
        return false
      }
    })

    if (!foundSection) {
      history.replaceState(null, null, ' ')
    }
  }

  $(window).scroll(updateURLFragment)

  updateURLFragment()
})

$(document).ready(function () {
  // Add smooth scrolling to all links
  $('a').on('click', function (event) {
    if (this.hash !== '') {
      event.preventDefault()

      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash
        }
      )
    }
  })
})

// jQuery function to handle recipe filtering
$(document).ready(function () {
  $('.filter-button').click(function () {
    // Remove active class from all buttons
    $('.filter-button').removeClass('active')
    // Add active class to the clicked button
    $(this).addClass('active')

    var value = $(this).attr('data-filter')

    if (value == 'all') {
      // Show all recipe cards if 'All' button is clicked
      $('.recipe-card').show()
    } else {
      // Hide all recipe cards and show only the ones with matching category
      $('.recipe-card').hide()
      $('.recipe-card[data-category="' + value + '"]').show()
    }
  })
})

// JQuery function for accordin
$(document).ready(function () {
  $('.card-header').click(function () {
    var $arrowIcon = $(this).find('.arrow-icon i')
    $arrowIcon.toggleClass('fa-chevron-down fa-chevron-up')
  })

  // Change arrow icon when accordion item is shown
  $('.collapse').on('show.bs.collapse', function () {
    $(this)
      .closest('.card')
      .find('.arrow-icon i')
      .removeClass('fa-chevron-down')
      .addClass('fa-chevron-up')
  })

  // Change arrow icon when accordion item is hidden
  $('.collapse').on('hide.bs.collapse', function () {
    $(this)
      .closest('.card')
      .find('.arrow-icon i')
      .removeClass('fa-chevron-up')
      .addClass('fa-chevron-down')
  })
})
