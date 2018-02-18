/* eslint-disable */ 
export function mountain() {
  var _createClass = (function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  })();

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    }
    return call && (typeof call === "object" || typeof call === "function")
      ? call
      : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError(
        "Super expression must either be null or a function, not " +
          typeof superClass
      );
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass)
      Object.setPrototypeOf
        ? Object.setPrototypeOf(subClass, superClass)
        : (subClass.__proto__ = superClass);
  }

  var noise = new Noise(Math.random());

  var Mountain = (function(_THREE$Object3D) {
    _inherits(Mountain, _THREE$Object3D);

    function Mountain() {
      _classCallCheck(this, Mountain);

      var _this = _possibleConstructorReturn(
        this,
        (Mountain.__proto__ || Object.getPrototypeOf(Mountain)).call(this)
      );

      _this.rotation.x = -Math.PI / 2;

      _this._tX = 0;
      _this._tZ = 0;

      // settings
      _this.size = 9;
      _this.resolution = 25; // dont make too high!
      _this.height = 1.8;
      _this.speed = 0.096;
      _this.flatShading = false;

      var geom = new THREE.PlaneGeometry(
        _this.size,
        _this.size,
        _this.size * _this.resolution,
        _this.size * _this.resolution
      );
      var material = new THREE.MeshLambertMaterial({
        color: 0xff00ff,
        side: THREE.DoubleSide
      });
      _this.mesh = new THREE.Mesh(geom, material);

      _this.add(_this.mesh);

      geom.mergeVertices();

      var l = geom.vertices.length;
      _this.originals = [];
      for (var i = 0; i < l; i++) {
        var v = geom.vertices[i];

        // store some data associated to it
        _this.originals.push({
          y: v.y,
          x: v.x,
          z: v.z
        });
      }
      return _this;
    }

    _createClass(Mountain, [
      {
        key: "moveWaves",
        value: function moveWaves() {
          var verts = this.mesh.geometry.vertices;
          var l = verts.length;

          for (var i = 0; i < l; i++) {
            var v = verts[i];
            var original = this.originals[i];

            // need to update Z to go up in Y axis becasue of the rotation on this
            v.z =
              noise.perlin2(original.x + this._tX, original.y + this._tZ) *
              this.height;
          }

          // Update vertices and comput normals for shading
          this.mesh.geometry.verticesNeedUpdate = true;
          if (this.flatShading) this.mesh.geometry.computeFlatVertexNormals();
          else this.mesh.geometry.computeVertexNormals();
        }
      },
      {
        key: "update",
        value: function update(delta) {
          this._tX += this.speed * delta;
          this._tZ += this.speed * delta;

          this.moveWaves();
        }
      }
    ]);

    return Mountain;
  })(THREE.Object3D);

  /// INIT

  var HEIGHT = window.innerHeight;
  var WIDTH = window.innerWidth;

  // Create the scene
  var scene = new THREE.Scene();

  scene.fog = new THREE.Fog(0xc6ccff, 5, 10);

  // Create the camera
  var aspectRatio = WIDTH / HEIGHT;
  var fieldOfView = 60;
  var nearPlane = 0.1;
  var farPlane = 30;
  var camera = new THREE.PerspectiveCamera(
    fieldOfView,
    aspectRatio,
    nearPlane,
    farPlane
  );

  // Create the renderer
  var renderer = new THREE.WebGLRenderer({
    alpha: false,
    antialias: true
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0xc6ccff, 1);
  renderer.setSize(WIDTH, HEIGHT);
  document.documentElement.appendChild(renderer.domElement);

  var ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);
  var dirLight = new THREE.DirectionalLight(0xffffff, 0.6);
  dirLight.position.set(10, 1, -1);
  scene.add(dirLight);

  var controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.enableDamping = true;
  controls.dampingFactor = 0.25;
  controls.enableZoom = true;

  function handleWindowResize() {
    // update height and width of the renderer and the camera
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    renderer.setSize(WIDTH, HEIGHT);
    camera.aspect = WIDTH / HEIGHT;
    camera.updateProjectionMatrix();
  }

  var render = function render() {
    var delta = clock.getDelta();
    var elapsed = clock.getElapsedTime();
    mountain.update(delta, elapsed);
    controls.update();
    renderer.render(scene, camera);
    window.requestAnimationFrame(render);
  };

  //////////
  // INIT
  //////////
  window.addEventListener("resize", handleWindowResize, false);

  //set camera at eyes height
  camera.position.y = 3;
  camera.position.z = 6;
  controls.target.set(0, 0, 0);

  // create snow
  var mountain = new Mountain();
  scene.add(mountain);

  // start render
  var clock = new THREE.Clock();
  render();
}
