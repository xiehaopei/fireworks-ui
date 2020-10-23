<demo>
示例二 type
</demo>

<template>
  <div>
    <Button type="default">默认按钮</Button>
    <Button type="primary">主要按钮</Button>
    <Button type="success">成功按钮</Button>
    <Button type="info">提示按钮</Button>
    <Button type="warning">警告按钮</Button>
    <Button type="danger">危险按钮</Button>
  </div>
</template>
<script>
import { Button } from '../lib/index';
export default {
  components: { Button },
};
</script>