(function(w,d,g,a,q,p,t,h,i,n){
  t = d.getElementsByTagName('title')[0];
  h = t.parentNode;

  n = d.createElement('link'); n.rel = 'stylesheet'; n.href = '//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css';
  h.insertBefore(n, t);

  i = function(s) {
    n = d.createElement('script'); n.async = 1; n.src = s; h.insertBefore(n, t);
  };
  i('//google-analytics.com/analytics.js');
  i('//quantserve.com/quant.js');

  w['GoogleAnalyticsObject'] = g;
  w[g] = w[g] || function() {
    (w[g].q = w[g].q || []).push(arguments)
  },
  w[g].l = 1 * new Date();

  w[g]('create', a, 'auto');
  w[g]('send', 'pageview');

  (w[q] = w[q] || []).push({qacct:p});
})(window,document,'ga','{{ site.analytics.google }}','_qevents','{{ site.analytics.quantcast }}');
