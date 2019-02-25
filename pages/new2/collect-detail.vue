<template>
<div>
    <h1 class="title is-size-2">2018年第50周最受欢迎的抖音小姐姐</h1>
    <div class="columns">
      <div class="column is-two-thirds news">
        <JMShareBar class="news-sharebar">
          <JMIconBtn>3.2k</JMIconBtn>
          <JMIconBtn icon="repost">100</JMIconBtn>
        </JMShareBar>
        <p>
          未来某刻，我们的银河系将会经历一场可怕的、无人问津的灾难，而我们这些贫弱的大脑几乎无法理解这些灾难。一股巨大的热能和气体将冲进我们的银河系，把构成银河系的所有不同部分扔进一个可怕的宇宙混乱漩涡中。星星会相互撞击，行星会被破碎并燃烧 - 如果它们没有完全蒸发完的话 - 所有的一切都将面目全非。
        </p>
        <JMPlayer class="news-player"></JMPlayer>
        <p>
          但我们还无需担心：数十亿年内还不会发生这种情况。不幸的是，无论生命形式在不久的将来会变成什么样，这种情况很快就会发生(相对我们来说)。我们已经知道银河系在大约80亿年后最终会与仙女座星系碰撞，并形成新星系。但根据上星期五在皇家天文学会月刊上公布的新发现，我们应该关注与另一个星际物体的另一次碰撞，这将在20亿年后发生。
        </p>
        <JMPlayer class="news-player"></JMPlayer>
        <p>
          让我们来了解一哈大麦哲伦星云，这是一个距离我们大约16万光年的卫星星系。它的质量高达100亿颗太阳(明显低于银河系的质量，但仍然是一个庞然大物)。虽然科学家长期以来认为大麦哲伦星云是一个相对较新的邻居，只有微弱的引力与银河系相联系，但对暗物质的新发现表明大麦哲伦星云比我们想象的更大，因此更有可能在未来击中银河系。
        </p>
        <p>
          “过去两年的观察结果表明，大麦哲伦星云嵌入暗物质中的光环几乎是之前认为的两倍，”英国杜伦大学的科学家、新研究的主要作者Marius Cautun说。“大麦哲伦星云的质量越高，我们的命运就越密切，这意味着大麦哲伦星云与银河系的联系更紧密，并且它将在大约20亿年内与我们的银河系碰撞。”
        </p>
        <p>
          Cautun和他的同事们认为，在新的暗物质估计的背景下可以更好地说明大麦哲伦星云如何与银河系相互作用，以及这种关系如何向前发展。该团队使用计算机建模来设想多种情景，这些情景可以解释在未来几十亿年内决定大麦哲伦星云和银河系的运动和行为的各种因素，并且在大约93％的模型中，大麦哲伦星云会与银河系相撞，比与仙女座星系更早。
        </p>
        <JMPlayer class="news-player"></JMPlayer>
        <p>
          Cautun和他的同事们认为，在新的暗物质估计的背景下可以更好地说明大麦哲伦星云如何与银河系相互作用，以及这种关系如何向前发展。该团队使用计算机建模来设想多种情景，这些情景可以解释在未来几十亿年内决定大麦哲伦星云和银河系的运动和行为的各种因素，并且在大约93％的模型中，大麦哲伦星云会与银河系相撞，比与仙女座星系更早。
        </p>
      </div>
      <div class="column">
        <JMRightAd></JMRightAd>
        <JMRightAd></JMRightAd>
        <JMRightAd></JMRightAd>
      </div>
    </div>
</div>
</template>

<script>
import JMRightAd from "@/components/new2/JMRightAd";
import JMPlayer from "@/components/new2/JMPlayer";
import JMShareBar from "@/components/new2/JMShareBar";
import JMIconBtn from "@/components/new2/JMIconBtn";

export default {
  components: {JMRightAd, JMPlayer, JMShareBar, JMIconBtn},
  layout: "new1"
};
</script>
<style lang="scss" scoped>
.news {
  &-player {
    margin: 1.5rem 0;
  }
  &-sharebar {
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #eee;
  }
  p {
    line-height: 2rem;
    font-size: 1.1rem;
  }
}

</style>
