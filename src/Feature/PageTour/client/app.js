import '@babel/polyfill';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';
import '!file-loader?name=[name].[ext]!./images/favicon.ico';
import 'file-loader?name=.htaccess!./.htaccess';
import 'expose-loader?AppBootstrapper!app-bootstrapper'


const openSansObserver = new FontFaceObserver('Open Sans', {});

openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});