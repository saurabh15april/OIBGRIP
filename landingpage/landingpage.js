const features = document.querySelectorAll(".feature");
    features.forEach(feature => {
      feature.addEventListener("mouseenter", function() {
        this.style.transform = "scale(1.1)";
      });
      feature.addEventListener("mouseleave", function() {
        this.style.transform = "scale(1)";
      });
    });
    function changeImage1() {
      var image = document.getElementById('myImage1');
      if (image.src.match("./feature1car.gif")) {
        image.src = "./feature1carimage.jpg";
      } else {
        image.src = "./feature1car.gif";
      }}

      function changeImage2() {
        var image = document.getElementById('myImage2');
        if (image.src.match("./feature1car.gif")) {
          image.src = "./feature1carimage.jpg";
        } else {
          image.src = "./feature1car.gif";
        }}

        function changeImage3() {
          var image = document.getElementById('myImage3');
          if (image.src.match("./feature1car.gif")) {
            image.src = "./feature1carimage.jpg";
          } else {
            image.src = "./feature1car.gif";
          }}
          function changeImage4() {
            var image = document.getElementById('myImage4');
            if (image.src.match("./feature1car.gif")) {
              image.src = "./feature1carimage.jpg";
            } else {
              image.src = "./feature1car.gif";
            }}
            function changeImage5() {
              var image = document.getElementById('myImage5');
              if (image.src.match("./feature1car.gif")) {
                image.src = "./feature1carimage.jpg";
              } else {
                image.src = "./feature1car.gif";
              }}
              function changeImage6() {
                var image = document.getElementById('myImage6');
                if (image.src.match("./feature1car.gif")) {
                  image.src = "./feature1carimage.jpg";
                } else {
                  image.src = "./feature1car.gif";
                }}
                function changeImage7() {
                  var image = document.getElementById('myImage7');
                  if (image.src.match("./feature1car.gif")) {
                    image.src = "./feature1carimage.jpg";
                  } else {
                    image.src = "./feature1car.gif";
                  }}
                 