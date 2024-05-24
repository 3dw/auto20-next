<template lang="pug">
    .hello
      h1.ui.header
        img(src="../assets/handshake1.webp")
        | 自學2.0共識凝聚
        img(src="../assets/handshake1.webp")
    
      div.polis(data-page_id="PAGE_ID" data-site_id="polis_site_id_AcvBPzL6pBLVknQ3rt")

    
    </template>
    <script>
    export default {
      name: 'PolisView',
      mounted() {
        const script = document.createElement('script');
        script.src = 'https://pol.is/embed.js';
        script.async = true;
        document.body.appendChild(script);
    },
};
</script>
    <style type="text/css" scoped>
      h2, p {
        text-align: left;
      }
    
      p {
        font-size: 16px;
      }
    
      img {
        border-radius: 50%;
      }
    </style>
    