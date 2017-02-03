var Delaunay;!function(){"use strict";function t(t){var e,i,r,n,s,o,h=Number.POSITIVE_INFINITY,a=Number.POSITIVE_INFINITY,l=Number.NEGATIVE_INFINITY,u=Number.NEGATIVE_INFINITY;for(e=t.length;e--;)t[e][0]<h&&(h=t[e][0]),t[e][0]>l&&(l=t[e][0]),t[e][1]<a&&(a=t[e][1]),t[e][1]>u&&(u=t[e][1]);return i=l-h,r=u-a,n=Math.max(i,r),s=h+.5*i,o=a+.5*r,[[s-20*n,o-n],[s,o+20*n],[s+20*n,o-n]]}function e(t,e,i,n){var s,o,h,a,l,u,f,c,S,d,m=t[e][0],g=t[e][1],p=t[i][0],F=t[i][1],b=t[n][0],y=t[n][1],v=Math.abs(g-F),w=Math.abs(F-y);if(v<r&&w<r)throw new Error("Error!");return v<r?(a=-((b-p)/(y-F)),u=(p+b)/2,c=(F+y)/2,s=(p+m)/2,o=a*(s-u)+c):w<r?(h=-((p-m)/(F-g)),l=(m+p)/2,f=(g+F)/2,s=(b+p)/2,o=h*(s-l)+f):(h=-((p-m)/(F-g)),a=-((b-p)/(y-F)),l=(m+p)/2,u=(p+b)/2,f=(g+F)/2,c=(F+y)/2,s=(h*l-a*u+c-f)/(h-a),o=v>w?h*(s-l)+f:a*(s-u)+c),S=p-s,d=F-o,{i:e,j:i,k:n,x:s,y:o,r:S*S+d*d}}function i(t){var e,i,r,n,s,o;for(i=t.length;i;)for(n=t[--i],r=t[--i],e=i;e;)if(o=t[--e],s=t[--e],r===s&&n===o||r===o&&n===s){t.splice(i,2),t.splice(e,2);break}}var r=1/1048576;Delaunay={triangulate:function(n,s){var o,h,a,l,u,f,c,S,d,m,g,p,F=n.length;if(F<3)return[];if(n=n.slice(0),s)for(o=F;o--;)n[o]=n[o][s];for(a=new Array(F),o=F;o--;)a[o]=o;for(a.sort(function(t,e){return n[e][0]-n[t][0]}),l=t(n),n.push(l[0],l[1],l[2]),u=[e(n,F+0,F+1,F+2)],f=[],c=[],o=a.length;o--;c.length=0){for(p=a[o],h=u.length;h--;)S=n[p][0]-u[h].x,S>0&&S*S>u[h].r?(f.push(u[h]),u.splice(h,1)):(d=n[p][1]-u[h].y,S*S+d*d-u[h].r>r||(c.push(u[h].i,u[h].j,u[h].j,u[h].k,u[h].k,u[h].i),u.splice(h,1)));for(i(c),h=c.length;h;)g=c[--h],m=c[--h],u.push(e(n,m,g,p))}for(o=u.length;o--;)f.push(u[o]);for(u.length=0,o=f.length;o--;)f[o].i<F&&f[o].j<F&&f[o].k<F&&u.push(f[o].i,f[o].j,f[o].k);return u},contains:function(t,e){if(e[0]<t[0][0]&&e[0]<t[1][0]&&e[0]<t[2][0]||e[0]>t[0][0]&&e[0]>t[1][0]&&e[0]>t[2][0]||e[1]<t[0][1]&&e[1]<t[1][1]&&e[1]<t[2][1]||e[1]>t[0][1]&&e[1]>t[1][1]&&e[1]>t[2][1])return null;var i=t[1][0]-t[0][0],r=t[2][0]-t[0][0],n=t[1][1]-t[0][1],s=t[2][1]-t[0][1],o=i*s-r*n;if(0===o)return null;var h=(s*(e[0]-t[0][0])-r*(e[1]-t[0][1]))/o,a=(i*(e[1]-t[0][1])-n*(e[0]-t[0][0]))/o;return h<0||a<0||h+a>1?null:[h,a]}},"undefined"!=typeof module&&(module.exports=Delaunay)}(),FSS={FRONT:0,BACK:1,DOUBLE:2,SVGNS:"http://www.w3.org/2000/svg"},FSS.Array="function"==typeof Float32Array?Float32Array:Array,FSS.Utils={isNumber:function(t){return!isNaN(parseFloat(t))&&isFinite(t)}},function(){for(var t=0,e=["ms","moz","webkit","o"],i=0;i<e.length&&!window.requestAnimationFrame;++i)window.requestAnimationFrame=window[e[i]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[e[i]+"CancelAnimationFrame"]||window[e[i]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,i){var r=(new Date).getTime(),n=Math.max(0,16-(r-t)),s=window.setTimeout(function(){e(r+n)},n);return t=r+n,s}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(t){clearTimeout(t)})}(),Math.PIM2=2*Math.PI,Math.PID2=Math.PI/2,Math.randomInRange=function(t,e){return t+(e-t)*Math.random()},Math.clamp=function(t,e,i){return t=Math.max(t,e),t=Math.min(t,i)},FSS.Vector3={create:function(t,e,i){var r=new FSS.Array(3);return this.set(r,t,e,i),r},clone:function(t){var e=this.create();return this.copy(e,t),e},set:function(t,e,i,r){return t[0]=e||0,t[1]=i||0,t[2]=r||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},copy:function(t,e){return t[0]=e[0],t[1]=e[1],t[2]=e[2],this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],this},addVectors:function(t,e,i){return t[0]=e[0]+i[0],t[1]=e[1]+i[1],t[2]=e[2]+i[2],this},addScalar:function(t,e){return t[0]+=e,t[1]+=e,t[2]+=e,this},subtract:function(t,e){return t[0]-=e[0],t[1]-=e[1],t[2]-=e[2],this},subtractVectors:function(t,e,i){return t[0]=e[0]-i[0],t[1]=e[1]-i[1],t[2]=e[2]-i[2],this},subtractScalar:function(t,e){return t[0]-=e,t[1]-=e,t[2]-=e,this},multiply:function(t,e){return t[0]*=e[0],t[1]*=e[1],t[2]*=e[2],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,this},divide:function(t,e){return t[0]/=e[0],t[1]/=e[1],t[2]/=e[2],this},divideVectors:function(t,e,i){return t[0]=e[0]/i[0],t[1]=e[1]/i[1],t[2]=e[2]/i[2],this},divideScalar:function(t,e){return 0!==e?(t[0]/=e,t[1]/=e,t[2]/=e):(t[0]=0,t[1]=0,t[2]=0),this},cross:function(t,e){var i=t[0],r=t[1],n=t[2];return t[0]=r*e[2]-n*e[1],t[1]=n*e[0]-i*e[2],t[2]=i*e[1]-r*e[0],this},crossVectors:function(t,e,i){return t[0]=e[1]*i[2]-e[2]*i[1],t[1]=e[2]*i[0]-e[0]*i[2],t[2]=e[0]*i[1]-e[1]*i[0],this},min:function(t,e){return t[0]<e&&(t[0]=e),t[1]<e&&(t[1]=e),t[2]<e&&(t[2]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this},limit:function(t,e,i){var r=this.length(t);return null!==e&&r<e?this.setLength(t,e):null!==i&&r>i&&this.setLength(t,i),this},dot:function(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]},normalise:function(t){return this.divideScalar(t,this.length(t))},negate:function(t){return this.multiplyScalar(t,-1)},distanceSquared:function(t,e){var i=t[0]-e[0],r=t[1]-e[1],n=t[2]-e[2];return i*i+r*r+n*n},distance:function(t,e){return Math.sqrt(this.distanceSquared(t,e))},lengthSquared:function(t){return t[0]*t[0]+t[1]*t[1]+t[2]*t[2]},length:function(t){return Math.sqrt(this.lengthSquared(t))},setLength:function(t,e){var i=this.length(t);return 0!==i&&e!==i&&this.multiplyScalar(t,e/i),this}},FSS.Vector4={create:function(t,e,i,r){var n=new FSS.Array(4);return this.set(n,t,e,i),n},set:function(t,e,i,r,n){return t[0]=e||0,t[1]=i||0,t[2]=r||0,t[3]=n||0,this},setX:function(t,e){return t[0]=e||0,this},setY:function(t,e){return t[1]=e||0,this},setZ:function(t,e){return t[2]=e||0,this},setW:function(t,e){return t[3]=e||0,this},add:function(t,e){return t[0]+=e[0],t[1]+=e[1],t[2]+=e[2],t[3]+=e[3],this},multiplyVectors:function(t,e,i){return t[0]=e[0]*i[0],t[1]=e[1]*i[1],t[2]=e[2]*i[2],t[3]=e[3]*i[3],this},multiplyScalar:function(t,e){return t[0]*=e,t[1]*=e,t[2]*=e,t[3]*=e,this},min:function(t,e){return t[0]<e&&(t[0]=e),t[1]<e&&(t[1]=e),t[2]<e&&(t[2]=e),t[3]<e&&(t[3]=e),this},max:function(t,e){return t[0]>e&&(t[0]=e),t[1]>e&&(t[1]=e),t[2]>e&&(t[2]=e),t[3]>e&&(t[3]=e),this},clamp:function(t,e,i){return this.min(t,e),this.max(t,i),this}},FSS.Color=function(t,e){this.rgba=FSS.Vector4.create(),this.hex=t||"#000000",this.opacity=FSS.Utils.isNumber(e)?e:1,this.set(this.hex,this.opacity)},FSS.Color.prototype={set:function(t,e){t=t.replace("#","");var i=t.length/3;return this.rgba[0]=parseInt(t.substring(0*i,1*i),16)/255,this.rgba[1]=parseInt(t.substring(1*i,2*i),16)/255,this.rgba[2]=parseInt(t.substring(2*i,3*i),16)/255,this.rgba[3]=FSS.Utils.isNumber(e)?e:this.rgba[3],this},hexify:function(t){var e=Math.ceil(255*t).toString(16);return 1===e.length&&(e="0"+e),e},format:function(){var t=this.hexify(this.rgba[0]),e=this.hexify(this.rgba[1]),i=this.hexify(this.rgba[2]);return this.hex="#"+t+e+i,this.hex}},FSS.Object=function(){this.position=FSS.Vector3.create()},FSS.Object.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Light=function(t,e){FSS.Object.call(this),this.ambient=new FSS.Color(t||"#FFFFFF"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.ray=FSS.Vector3.create()},FSS.Light.prototype=Object.create(FSS.Object.prototype),FSS.Vertex=function(t,e,i){this.position=FSS.Vector3.create(t,e,i)},FSS.Vertex.prototype={setPosition:function(t,e,i){return FSS.Vector3.set(this.position,t,e,i),this}},FSS.Triangle=function(t,e,i){this.a=t||new FSS.Vertex,this.b=e||new FSS.Vertex,this.c=i||new FSS.Vertex,this.vertices=[this.a,this.b,this.c],this.u=FSS.Vector3.create(),this.v=FSS.Vector3.create(),this.centroid=FSS.Vector3.create(),this.normal=FSS.Vector3.create(),this.color=new FSS.Color,this.polygon=document.createElementNS(FSS.SVGNS,"polygon"),this.polygon.setAttributeNS(null,"stroke-linejoin","round"),this.polygon.setAttributeNS(null,"stroke-miterlimit","1"),this.polygon.setAttributeNS(null,"stroke-width","1"),this.computeCentroid(),this.computeNormal()},FSS.Triangle.prototype={computeCentroid:function(){return this.centroid[0]=this.a.position[0]+this.b.position[0]+this.c.position[0],this.centroid[1]=this.a.position[1]+this.b.position[1]+this.c.position[1],this.centroid[2]=this.a.position[2]+this.b.position[2]+this.c.position[2],FSS.Vector3.divideScalar(this.centroid,3),this},computeNormal:function(){return FSS.Vector3.subtractVectors(this.u,this.b.position,this.a.position),FSS.Vector3.subtractVectors(this.v,this.c.position,this.a.position),FSS.Vector3.crossVectors(this.normal,this.u,this.v),FSS.Vector3.normalise(this.normal),this}},FSS.Geometry=function(){this.vertices=[],this.triangles=[],this.dirty=!1},FSS.Geometry.prototype={update:function(){if(this.dirty){var t,e;for(t=this.triangles.length-1;t>=0;t--)e=this.triangles[t],e.computeCentroid(),e.computeNormal();this.dirty=!1}return this}},FSS.Plane=function(t,e,i){FSS.Geometry.call(this),this.width=t||100,this.height=e||100;var r,n,s=new Array(i);for(offsetX=this.width*-.5,offsetY=.5*this.height,o=s.length;o--;)r=offsetX+Math.random()*t,n=offsetY-Math.random()*e,s[o]=[r,n];s.push([offsetX,offsetY]),s.push([offsetX+t/2,offsetY]),s.push([offsetX+t,offsetY]),s.push([offsetX+t,offsetY-e/2]),s.push([offsetX+t,offsetY-e]),s.push([offsetX+t/2,offsetY-e]),s.push([offsetX,offsetY-e]),s.push([offsetX,offsetY-e/2]);for(var o=6;o>=0;o--)s.push([offsetX+Math.random()*t,offsetY]),s.push([offsetX,offsetY-Math.random()*e]),s.push([offsetX+t,offsetY-Math.random()*e]),s.push([offsetX+Math.random()*t,offsetY-e]);var h=Delaunay.triangulate(s);for(o=h.length;o;)--o,v1=new FSS.Vertex(Math.ceil(s[h[o]][0]),Math.ceil(s[h[o]][1])),--o,v2=new FSS.Vertex(Math.ceil(s[h[o]][0]),Math.ceil(s[h[o]][1])),--o,v3=new FSS.Vertex(Math.ceil(s[h[o]][0]),Math.ceil(s[h[o]][1])),t1=new FSS.Triangle(v1,v2,v3),this.triangles.push(t1),this.vertices.push(v1),this.vertices.push(v2),this.vertices.push(v3)},FSS.Plane.prototype=Object.create(FSS.Geometry.prototype),FSS.Material=function(t,e){this.ambient=new FSS.Color(t||"#444444"),this.diffuse=new FSS.Color(e||"#FFFFFF"),this.slave=new FSS.Color},FSS.Mesh=function(t,e){FSS.Object.call(this),this.geometry=t||new FSS.Geometry,this.material=e||new FSS.Material,this.side=FSS.FRONT,this.visible=!0},FSS.Mesh.prototype=Object.create(FSS.Object.prototype),FSS.Mesh.prototype.update=function(t,e){var i,r,n,s,o;if(this.geometry.update(),e)for(i=this.geometry.triangles.length-1;i>=0;i--){for(r=this.geometry.triangles[i],FSS.Vector4.set(r.color.rgba),n=t.length-1;n>=0;n--)s=t[n],FSS.Vector3.subtractVectors(s.ray,s.position,r.centroid),FSS.Vector3.normalise(s.ray),o=FSS.Vector3.dot(r.normal,s.ray),this.side===FSS.FRONT?o=Math.max(o,0):this.side===FSS.BACK?o=Math.abs(Math.min(o,0)):this.side===FSS.DOUBLE&&(o=Math.max(Math.abs(o),0)),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.ambient.rgba,s.ambient.rgba),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba),FSS.Vector4.multiplyVectors(this.material.slave.rgba,this.material.diffuse.rgba,s.diffuse.rgba),FSS.Vector4.multiplyScalar(this.material.slave.rgba,o),FSS.Vector4.add(r.color.rgba,this.material.slave.rgba);FSS.Vector4.clamp(r.color.rgba,0,1)}return this},FSS.Scene=function(){this.meshes=[],this.lights=[]},FSS.Scene.prototype={add:function(t){return t instanceof FSS.Mesh&&!~this.meshes.indexOf(t)?this.meshes.push(t):t instanceof FSS.Light&&!~this.lights.indexOf(t)&&this.lights.push(t),this},remove:function(t){return t instanceof FSS.Mesh&&~this.meshes.indexOf(t)?this.meshes.splice(this.meshes.indexOf(t),1):t instanceof FSS.Light&&~this.lights.indexOf(t)&&this.lights.splice(this.lights.indexOf(t),1),this}},FSS.Renderer=function(){this.width=0,this.height=0,this.halfWidth=0,this.halfHeight=0},FSS.Renderer.prototype={setSize:function(t,e){if(this.width!==t||this.height!==e)return this.width=t,this.height=e,this.halfWidth=.5*this.width,this.halfHeight=.5*this.height,this},clear:function(){return this},render:function(t){return this}},FSS.CanvasRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.context=this.element.getContext("2d"),this.setSize(this.element.width,this.element.height)},FSS.CanvasRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.CanvasRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.width=t,this.element.height=e,this.context.setTransform(1,0,0,-1,this.halfWidth,this.halfHeight),this},FSS.CanvasRenderer.prototype.clear=function(){return FSS.Renderer.prototype.clear.call(this),this.context.clearRect(-this.halfWidth,-this.halfHeight,this.width,this.height),this},FSS.CanvasRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t);var e,i,r,n,s;for(this.clear(),this.context.lineJoin="round",this.context.lineWidth=1,e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)n=i.geometry.triangles[r],s=n.color.format(),this.context.beginPath(),this.context.moveTo(n.a.position[0],n.a.position[1]),this.context.lineTo(n.b.position[0],n.b.position[1]),this.context.lineTo(n.c.position[0],n.c.position[1]),this.context.closePath(),this.context.strokeStyle=s,this.context.fillStyle=s,this.context.stroke(),this.context.fill();return this},FSS.WebGLRenderer=function(){FSS.Renderer.call(this),this.element=document.createElement("canvas"),this.element.style.display="block",this.vertices=null,this.lights=null;var t={preserveDrawingBuffer:!1,premultipliedAlpha:!0,antialias:!0,stencil:!0,alpha:!0};return this.gl=this.getContext(this.element,t),this.unsupported=!this.gl,this.unsupported?"WebGL is not supported by your browser.":(this.gl.clearColor(0,0,0,0),this.gl.enable(this.gl.DEPTH_TEST),this.setSize(this.element.width,this.element.height),void 0)},FSS.WebGLRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.WebGLRenderer.prototype.getContext=function(t,e){var i=!1;try{if(!(i=t.getContext("experimental-webgl",e)))throw"Error creating WebGL context."}catch(t){console.error(t)}return i},FSS.WebGLRenderer.prototype.setSize=function(t,e){if(FSS.Renderer.prototype.setSize.call(this,t,e),!this.unsupported)return this.element.width=t,this.element.height=e,this.gl.viewport(0,0,t,e),this},FSS.WebGLRenderer.prototype.clear=function(){if(FSS.Renderer.prototype.clear.call(this),!this.unsupported)return this.gl.clear(this.gl.COLOR_BUFFER_BIT|this.gl.DEPTH_BUFFER_BIT),this},FSS.WebGLRenderer.prototype.render=function(t){if(FSS.Renderer.prototype.render.call(this,t),!this.unsupported){var e,i,r,n,s,o,h,a,l,u,f,c,S,d,m,g=!1,p=t.lights.length,F=0;if(this.clear(),this.lights!==p){if(this.lights=p,!(this.lights>0))return;this.buildProgram(p)}if(this.program){for(e=t.meshes.length-1;e>=0;e--)i=t.meshes[e],i.geometry.dirty&&(g=!0),i.update(t.lights,!1),F+=3*i.geometry.triangles.length;if(g||this.vertices!==F){this.vertices=F;for(a in this.program.attributes){for(u=this.program.attributes[a],u.data=new FSS.Array(F*u.size),S=0,e=t.meshes.length-1;e>=0;e--)for(i=t.meshes[e],r=0,n=i.geometry.triangles.length;r<n;r++)for(s=i.geometry.triangles[r],d=0,m=s.vertices.length;d<m;d++){switch(vertex=s.vertices[d],a){case"side":this.setBufferData(S,u,i.side);break;case"position":this.setBufferData(S,u,vertex.position);break;case"centroid":this.setBufferData(S,u,s.centroid);break;case"normal":this.setBufferData(S,u,s.normal);break;case"ambient":this.setBufferData(S,u,i.material.ambient.rgba);break;case"diffuse":this.setBufferData(S,u,i.material.diffuse.rgba)}S++}this.gl.bindBuffer(this.gl.ARRAY_BUFFER,u.buffer),this.gl.bufferData(this.gl.ARRAY_BUFFER,u.data,this.gl.DYNAMIC_DRAW),this.gl.enableVertexAttribArray(u.location),this.gl.vertexAttribPointer(u.location,u.size,this.gl.FLOAT,!1,0,0)}}for(this.setBufferData(0,this.program.uniforms.resolution,[this.width,this.height,this.width]),o=p-1;o>=0;o--)h=t.lights[o],this.setBufferData(o,this.program.uniforms.lightPosition,h.position),this.setBufferData(o,this.program.uniforms.lightAmbient,h.ambient.rgba),this.setBufferData(o,this.program.uniforms.lightDiffuse,h.diffuse.rgba);for(l in this.program.uniforms)switch(u=this.program.uniforms[l],c=u.location,f=u.data,u.structure){case"3f":this.gl.uniform3f(c,f[0],f[1],f[2]);break;case"3fv":this.gl.uniform3fv(c,f);break;case"4fv":this.gl.uniform4fv(c,f)}}return this.gl.drawArrays(this.gl.TRIANGLES,0,this.vertices),this}},FSS.WebGLRenderer.prototype.setBufferData=function(t,e,i){if(FSS.Utils.isNumber(i))e.data[t*e.size]=i;else for(var r=i.length-1;r>=0;r--)e.data[t*e.size+r]=i[r]},FSS.WebGLRenderer.prototype.buildProgram=function(t){if(!this.unsupported){var e=FSS.WebGLRenderer.VS(t),i=FSS.WebGLRenderer.FS(t),r=e+i;if(!this.program||this.program.code!==r){var n=this.gl.createProgram(),s=this.buildShader(this.gl.VERTEX_SHADER,e),o=this.buildShader(this.gl.FRAGMENT_SHADER,i);if(this.gl.attachShader(n,s),this.gl.attachShader(n,o),this.gl.linkProgram(n),!this.gl.getProgramParameter(n,this.gl.LINK_STATUS)){var h=this.gl.getError(),a=this.gl.getProgramParameter(n,this.gl.VALIDATE_STATUS);return console.error("Could not initialise shader.\nVALIDATE_STATUS: "+a+"\nERROR: "+h),null}return this.gl.deleteShader(o),this.gl.deleteShader(s),n.code=r,n.attributes={side:this.buildBuffer(n,"attribute","aSide",1,"f"),position:this.buildBuffer(n,"attribute","aPosition",3,"v3"),centroid:this.buildBuffer(n,"attribute","aCentroid",3,"v3"),normal:this.buildBuffer(n,"attribute","aNormal",3,"v3"),ambient:this.buildBuffer(n,"attribute","aAmbient",4,"v4"),diffuse:this.buildBuffer(n,"attribute","aDiffuse",4,"v4")},n.uniforms={resolution:this.buildBuffer(n,"uniform","uResolution",3,"3f",1),lightPosition:this.buildBuffer(n,"uniform","uLightPosition",3,"3fv",t),lightAmbient:this.buildBuffer(n,"uniform","uLightAmbient",4,"4fv",t),lightDiffuse:this.buildBuffer(n,"uniform","uLightDiffuse",4,"4fv",t)},this.program=n,this.gl.useProgram(this.program),n}}},FSS.WebGLRenderer.prototype.buildShader=function(t,e){if(!this.unsupported){var i=this.gl.createShader(t);return this.gl.shaderSource(i,e),this.gl.compileShader(i),this.gl.getShaderParameter(i,this.gl.COMPILE_STATUS)?i:(console.error(this.gl.getShaderInfoLog(i)),null)}},FSS.WebGLRenderer.prototype.buildBuffer=function(t,e,i,r,n,s){var o={buffer:this.gl.createBuffer(),size:r,structure:n,data:null};switch(e){case"attribute":o.location=this.gl.getAttribLocation(t,i);break;case"uniform":o.location=this.gl.getUniformLocation(t,i)}return s&&(o.data=new FSS.Array(s*r)),o},FSS.WebGLRenderer.VS=function(t){var e=["precision mediump float;","#define LIGHTS "+t,"attribute float aSide;","attribute vec3 aPosition;","attribute vec3 aCentroid;","attribute vec3 aNormal;","attribute vec4 aAmbient;","attribute vec4 aDiffuse;","uniform vec3 uResolution;","uniform vec3 uLightPosition[LIGHTS];","uniform vec4 uLightAmbient[LIGHTS];","uniform vec4 uLightDiffuse[LIGHTS];","varying vec4 vColor;","void main() {","vColor = vec4(0.0);","vec3 position = aPosition / uResolution * 2.0;","for (int i = 0; i < LIGHTS; i++) {","vec3 lightPosition = uLightPosition[i];","vec4 lightAmbient = uLightAmbient[i];","vec4 lightDiffuse = uLightDiffuse[i];","vec3 ray = normalize(lightPosition - aCentroid);","float illuminance = dot(aNormal, ray);","if (aSide == 0.0) {","illuminance = max(illuminance, 0.0);","} else if (aSide == 1.0) {","illuminance = abs(min(illuminance, 0.0));","} else if (aSide == 2.0) {","illuminance = max(abs(illuminance), 0.0);","}","vColor += aAmbient * lightAmbient;","vColor += aDiffuse * lightDiffuse * illuminance;","}","vColor = clamp(vColor, 0.0, 1.0);","gl_Position = vec4(position, 1.0);","}"].join("\n");return e},FSS.WebGLRenderer.FS=function(t){var e=["precision mediump float;","varying vec4 vColor;","void main() {","gl_FragColor = vColor;","}"].join("\n");return e},FSS.SVGRenderer=function(){FSS.Renderer.call(this),this.element=document.createElementNS(FSS.SVGNS,"svg"),this.element.setAttribute("xmlns",FSS.SVGNS),this.element.setAttribute("version","1.1"),this.element.style.display="block",this.setSize(300,150)},FSS.SVGRenderer.prototype=Object.create(FSS.Renderer.prototype),FSS.SVGRenderer.prototype.setSize=function(t,e){return FSS.Renderer.prototype.setSize.call(this,t,e),this.element.setAttribute("width",t),this.element.setAttribute("height",e),this},FSS.SVGRenderer.prototype.clear=function(){FSS.Renderer.prototype.clear.call(this);for(var t=this.element.childNodes.length-1;t>=0;t--)this.element.removeChild(this.element.childNodes[t]);return this},FSS.SVGRenderer.prototype.render=function(t){FSS.Renderer.prototype.render.call(this,t);var e,i,r,n,s,o;for(e=t.meshes.length-1;e>=0;e--)if(i=t.meshes[e],i.visible)for(i.update(t.lights,!0),r=i.geometry.triangles.length-1;r>=0;r--)n=i.geometry.triangles[r],n.polygon.parentNode!==this.element&&this.element.appendChild(n.polygon),s=this.formatPoint(n.a)+" ",s+=this.formatPoint(n.b)+" ",s+=this.formatPoint(n.c),o=this.formatStyle(n.color.format()),n.polygon.setAttributeNS(null,"points",s),n.polygon.setAttributeNS(null,"style",o);return this},FSS.SVGRenderer.prototype.formatPoint=function(t){return this.halfWidth+t.position[0]+","+(this.halfHeight-t.position[1])},FSS.SVGRenderer.prototype.formatStyle=function(t){var e="fill:"+t+";";return e+="stroke:"+t+";"},function(){function t(){e(),r(),n(),o(),c(),h(N.offsetWidth,N.offsetHeight),a()}function e(){y=new FSS.WebGLRenderer,v=new FSS.CanvasRenderer,w=new FSS.SVGRenderer,i(P.renderer)}function i(t){switch(m&&C.removeChild(m.element),t){case A:m=y;break;case L:m=v;break;case M:m=w}m=w,m.setSize(N.offsetWidth,N.offsetHeight),C.appendChild(m.element)}function r(){g=new FSS.Scene}function n(){g.remove(p),m.clear(),F=new FSS.Plane(x.width*m.width,x.height*m.height,x.slices),b=new FSS.Material(x.ambient,x.diffuse),p=new FSS.Mesh(F,b),g.add(p);var t,e;for(t=F.vertices.length-1;t>=0;t--)e=F.vertices[t],e.depth=Math.randomInRange(0,x.maxdepth/10),e.anchor=FSS.Vector3.clone(e.position)}function s(t,e,i,r,n){t="undefined"!=typeof t?t:V.ambient,e="undefined"!=typeof e?e:V.diffuse,i="undefined"!=typeof i?i:V.xPos,r="undefined"!=typeof r?r:V.yPos,n="undefined"!=typeof n?n:V.zOffset,m.clear(),light=new FSS.Light(t,e),light.ambientHex=light.ambient.format(),light.diffuseHex=light.diffuse.format(),light.setPosition(i,r,n),g.add(light),V.diffuse=e,V.proxy=light,V.pickedup=!0,V.currIndex++}function o(){s(),V.count++}function h(t,e){m.setSize(t,e),FSS.Vector3.set(I,m.halfWidth,m.halfHeight),n()}function a(){u(),f(),requestAnimationFrame(a)}function u(){var t,e,i=x.depth/100;for(t=F.vertices.length-1;t>=0;t--)e=F.vertices[t],FSS.Vector3.set(e.position,1,1,e.depth*i),FSS.Vector3.add(e.position,e.anchor);F.dirty=!0}function f(){m.render(g)}function c(){window.addEventListener("resize",S),N.addEventListener("mousemove",d)}function S(t){h(N.offsetWidth,N.offsetHeight),f()}function d(t){V.pickedup&&(V.xPos=(t.x||t.clientX)-m.width/2,V.yPos=m.height/2-(t.y||t.clientY),V.proxy.setPosition(V.xPos,V.yPos,V.proxy.position[2]))}var m,g,p,F,b,y,v,w,R,x={width:1.2,height:1.2,slices:250,depth:11,maxdepth:200,ambient:"#555555",diffuse:"#FFFFFF"},V={count:0,xPos:68,yPos:440,zOffset:55,ambient:"#5838e6",diffuse:"#4efa62",pickedup:!0,proxy:!1,currIndex:0,randomize:function(){var t,e,i,r=Math.floor(3*Math.random())+1;for(1==r&&(x.depth=0),2==r&&(x.depth=Math.randomInRange(0,150)),3==r&&(x.depth=Math.randomInRange(150,200)),x.depth=0,l=g.lights.length-1;l>=0;l--){t=Math.randomInRange(-p.geometry.width/2,p.geometry.width/2),e=Math.randomInRange(-p.geometry.height/2,p.geometry.height/2),i=g.lights.length>2?Math.randomInRange(10,80):Math.randomInRange(10,100),light=g.lights[l],FSS.Vector3.set(light.position,t,e,i);var n=this.diffuse,s=this.ambient;light.diffuseHex=light.diffuse.format(),light.ambientHex=light.ambient.format(),V.xPos=t,V.yPos=e,V.zOffset=i,V.diffuse=n,V.ambient=s,R.__folders.Light.__controllers[1].updateDisplay(),R.__folders.Light.__controllers[2].updateDisplay()}}},A="webgl",L="canvas",M="svg",P={renderer:L},I=FSS.Vector3.create(),N=document.getElementById("promo"),C=(document.getElementById("controls"),document.querySelector(".promo__triangles"));V.pickedup=!0,t()}();