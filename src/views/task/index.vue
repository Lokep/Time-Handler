<style lang="less">
@import '../../assets/styles/rightbar.less';
.task {
  display: flex;
  height: 100%;

  &-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex: 1;
    margin: 8px;
  }

  .rightbar {
    height: 100%;
    width: 20vw;
    background-color: #fff;
    flex-shrink: 0;
    box-shadow: rgba(64, 158, 255, 0.1) -4px 9px 25px -6px;
  }

  &-column {
    flex: 1;
    background-color: #fff;
    height: 40vh;
    border-radius: 4px;
    box-shadow: rgba(64, 158, 255, 0.1) -4px 9px 25px -6px;
    box-sizing: border-box;
    padding: 8px;
    flex-shrink: 0;

    display: flex;
    flex-direction: column;

    &--header {
      box-sizing: border-box;
      padding: 8px; 
      flex-shrink: 0;
    }

    &--list {
      height: 0;
      flex: 1;
      overflow: auto;
    }
    

    & + & {
      margin-left: 16px;
    }
  }
}
.topbar {
  align-items: flex-end;
  flex-shrink: 0;
  margin-bottom: 16px;
  .greeting {
    font-size: 32px;
    margin: 15px 15px 0;
  }
}

.content {
  flex: 1;
  margin: 8px;
}
</style>
<template>
  <div class="task">
    <div class="task-wrapper">
      <!-- greeting -->
      <div class="topbar justify-between">
        <div class="greeting">{{ greeting }}</div>
        <!-- <div>
          <el-button type="primary" icon="el-icon-plus">新建任务</el-button>
        </div> -->
      </div>

      <div class="current">

      </div>

      <div class="content justify-between">
        <div class="task-column">
          <div class="task-column--header">TODO</div>

          <div class="task-column--list">

            <Cell v-for="(item, index) in TODO_LIST" :key="index" 
              :title="item.title" 
              icon="icona-youjiantouzhixiangyoujiantou"
              @click="(e: MouseEvent) => handleProgressChange(index, 'TODO_LIST', 'IN_PROGRESS')">
            </Cell>

          </div>

        </div>
        <div class="task-column">
          <div class="task-column--header">In Progress</div>
          <div class="task-column--list">

            <Cell v-for="(item, index) in IN_PROGRESS" :key="index" 
              :title="item.title" 
              icon="icona-youjiantouzhixiangyoujiantou"
              @click="(e: MouseEvent) => handleProgressChange(index, 'IN_PROGRESS', 'Done')">
            </Cell>
          </div>
        </div>
        <div class="task-column">
          <div class="task-column--header">DONE</div>
          <div class="task-column--list">

            <Cell v-for="(item, index) in DONE" :key="index" 
              :title="item.title">
            </Cell>

          </div>
        </div>
      </div>
    </div>

    <div class="rightbar">
      <!-- user -->
      <div class="rightbar-user justify-center align-center">
        <div class="avatar"></div>
        <div class="nickname">Lokep</div>
        <div class="mail">iamlokep@163.com</div>
      </div>
      
      <!-- task -->
      <div class="rightbar-task"></div>

      <!-- calendar -->
      <div class="rightbar-calendar">
        <el-calendar size="mini" :model-value="new Date()"
          :range="[new Date(2019, 2, 4), new Date(2020, 2, 24)]" >
        </el-calendar>
      </div>

    
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import Cell from '@/components/Cell/index'

export default defineComponent({
  components: {
    Cell
  },

  setup() {
    const TODO_LIST = reactive([
      {
        title: 'test'
      }
    ])
    const IN_PROGRESS = reactive([
      {
        title: 'test'
      }
    ])
    const DONE = reactive([
      {
        title: 'test'
      }
    ])

    const handleProgressChange = (index: number, currentStatus: string, nextStatus: string) => {
      const [ target ] = findTargetList(currentStatus).splice(index, 1)
      target && findTargetList(nextStatus).push(target)
    }

    const findTargetList = (status: string) => {
      if (status.toUpperCase() === 'TODO_LIST') {
        return TODO_LIST
      }
      if (status.toUpperCase() === 'IN_PROGRESS') {
        return IN_PROGRESS
      }
      if (status.toUpperCase() === 'DONE') {
        return DONE
      }
      return []
    }


    return {
      TODO_LIST,
      IN_PROGRESS,
      DONE,
      greeting: handleGreeting(),
      handleProgressChange
    }
  }
})


const handleGreeting = () => {
  let date: Date = new Date(), message: string = ''
  const hour: number = date.getHours()
  if (hour >= 0 && hour < 12) {
    message = "Good Morning, Lokep"
  } else if (hour >= 12 && hour < 18) {
    message =  "Good Afternoon, Lokep"
  } else {
    message =  "Good Night, Lokep"
  }
  return message
}

</script>