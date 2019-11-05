<template>
    <Layout>
        <div slot="body">
            <div class="notify-bg">
                <h4 class="text-center p-2 border-bottom">Notifications</h4>
                <div class="notify-card">
                    <p class="notify-text"><span class="rantter-name">Rantter123</span> Just liked your rant - 3sec ago</p>
                    <p class="notify-text">Styling is sweeter than kpomo</p>
                </div>
                <div class="notify-card">
                    <p class="notify-text"><span class="rantter-name">Rantter123</span> Just liked your rant - 3sec ago</p>
                    <p class="notify-text">Styling is sweeter than kpomo</p>
                </div>
                <div class="notify-card">
                    <p class="notify-text"><span class="rantter-name">Rantter123</span> Just liked your rant - 3sec ago</p>
                    <p class="notify-text">Styling is sweeter than kpomo</p>
                </div>
            </div>
        </div>
    </Layout>
</template>



<script>
    import Layout from '../../components/Layout';


    export default{
         name:'notification',
        components:{
            Layout
        }
    }
</script>