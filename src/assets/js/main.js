import React, { useEffect } from 'react'; // Import React and useEffect
import $ from 'jquery'; // Import jQuery
import WOW from 'wow.js'; 

const Main = () => { // Change function name to Main and capitalize
    new WOW().init();
  useEffect(() => { // Use useEffect for component lifecycle
    // Code inside useEffect will run after the component is rendered
    // Spinner
    const spinner = () => {
      setTimeout(function () {
        if ($('#spinner').length > 0) {
          $('#spinner').removeClass('show');
        }
      }, 1);
    };
    spinner();

    // Initiate the wowjs
    new WOW().init();

    // Sticky Navbar
    $(window).scroll(function () {
      if ($(this).scrollTop() > 40) {
        $('.navbar').addClass('sticky-top');
      } else {
        $('.navbar').removeClass('sticky-top');
      }
    });

    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";

    $(window).on("load resize", function() {
      if (window.matchMedia("(min-width: 992px)").matches) {
        $dropdown.hover(function() {
          const $this = $(this);
          $this.addClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "true");
          $this.find($dropdownMenu).addClass(showClass);
        }, function() {
          const $this = $(this);
          $this.removeClass(showClass);
          $this.find($dropdownToggle).attr("aria-expanded", "false");
          $this.find($dropdownMenu).removeClass(showClass);
        });
      } else {
        $dropdown.off("mouseenter mouseleave");
      }
    });

    // Back to top button
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn('slow');
      } else {
        $('.back-to-top').fadeOut('slow');
      }
    });

    $('.back-to-top').click(function () {
      $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
      return false;
    });

    // Other code snippets...

  }, []); // Empty dependency array means useEffect runs only once after the component mounts

  return (
    <div>{/* Your JSX content */}</div>
  );
}

export default Main; // Export Main component
