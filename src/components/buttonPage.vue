<!--
 * @Author: Haopei Xie
 * @Date: 2020-10-06 16:29:38
 * @LastEditTime: 2020-10-10 22:18:00
 * @LastEditors: Haopei Xie
 * @Description: 
 * @FilePath: \Pibukae:\vue\fireworks-ui\src\components\buttonPage.vue
 * @
-->
<template>
  <div>
    <h1>示例一 size</h1>
    <Button size="large">大型按钮</Button>
    <Button size="medium">中等按钮</Button>
    <Button size="mini">迷你按钮</Button>
    <h1>示例二 type</h1>
    <Button type="default">默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="info">提示按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
    <h1>示例三 theme</h1>
    <Button theme="button">按钮</Button>
    <Button theme="link">按钮</Button>
    <Button theme="text">按钮</Button>
    <h1>示例四 disabled</h1>
    <Button disabled>按钮</Button>
    <h1>示例五 loading</h1>
    <Button loading>加载中</Button>
  </div>
</template>

<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: { Button },
};
</script>
