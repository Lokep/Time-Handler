<style lang="less" scoped>
  .topbar {
    box-shadow: rgba(64, 158, 255, 0.1) -4px 9px 25px -6px;
    padding: 16px;
    border-radius: 4px;
    background-color: #fff;
    flex-shrink: 0;
    margin: 16px;
  }
  .fragment {
    flex-direction: row;
    margin: 16px;
  }
  .file {

    &-title {
      font-size: 32px;
    }

    &-dashboard {
      padding: 16px;
      background-color: #fff;
      border-radius: 4px;
      box-shadow: rgba(64, 158, 255, 0.1) -4px 9px 25px -6px;
      flex-basis: 250px;

      &--title {
        font-size: 28px;
      }
    }

    &-list {
      flex: 1;
    }


    &-item{
      flex-basis: 15%;
      margin-bottom: 15px;
      cursor: pointer;
      user-select: none;
      // height: 130px;

      &--icon {
        width: 120px;
        height: 120px;
        margin: 0 auto;
        background-color: #fff;
        box-shadow: rgba(64, 158, 255, 0.1) -4px 9px 25px -6px;
        border-radius: 4px;
        font-size: 36px;
        text-align: center;
        line-height: 120px;
        color: #bbb;

        position: relative;
      }

      &--checkbox {
        position: absolute;
        left: 16px;
        top: 16px;
        width: 16px;
        height: 16px;
        font-size: 16px;
        color: #409eff;
        border: 2px solid #409eff;
        border-radius: 4px;

        &::before {
          position: absolute;
          left: 0;
          top: 0;
          width: 16px;
          height: 16px;
          line-height: 1;
        }
      }

      &--name {
        text-align: center;
        width: 120px;
        margin: 5px auto 0;
      }
    }

    &-type {
      &--row {
        margin-bottom: 10px;
      }
    }
  }

  .upload {
    margin: 0 auto;
  }
</style>
<template>
  <el-affix :offset="16">
    <div class="topbar justify-between">
      <div class="align-center">
        <div class="file-title mr-30">File</div>
      </div>

      <div class="align-center" v-if="!isShowMoreOperation">
        <el-input class="mr-20" placeholder="filename..." suffix-icon="el-icon-search"
          clearable @clear="handleSearch" @change="handleSearch" />
      
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            <div class="iconfont icongengduo1"></div>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="upload" icon="el-icon-upload">
                upload
              </el-dropdown-item>
              <el-dropdown-item command="operation" icon="el-icon-more">更多操作</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>

      <div class="align-center" v-else>
        <el-button-group class="mr-15">
          <el-button type="primary" icon="el-icon-mobile" @click="previewOnMobile"></el-button>
          <el-button type="primary" icon="el-icon-share" @click="shareFileLinks"></el-button>
          <el-button type="primary" icon="el-icon-download" @click="batchDownload"></el-button>
          <el-button type="primary" icon="el-icon-delete" @click="deleteFiles"></el-button>
        </el-button-group>
        <el-button type="text" @click="isShowMoreOperation = false">cancel</el-button>
      </div>
    </div>
  </el-affix>
  
  <div class="fragment flex">

    <div class="file-list flex">

      <div class="file-item card">
        <div class="file-item--icon iconfont icontupian">
          <div v-if="isShowMoreOperation" :class="'file-item--checkbox iconfont iconcheckboxchecked' "></div>
        </div>
        <el-tooltip content="Javascript 权威指南" placement="top" effect="light">
          <div class="file-item--name mt-5 ellipsis">Javascript 权威指南</div>
        </el-tooltip>
      </div>

      <div class="file-item card">
        <div class="file-item--icon iconfont iconpdf">
          <div v-if="isShowMoreOperation" :class="'file-item--checkbox iconfont iconcheckboxchecked' "></div>
        </div>
        <el-tooltip content="Javascript 权威指南" placement="top" effect="light">
          <div class="file-item--name mt-5 ellipsis">Javascript 权威指南</div>
        </el-tooltip>
      </div>
    </div>


    <div class="file-dashboard">

      <div class="file-dashboard--topbar mb-15">
        <div class="file-dashboard--title">Storage</div>
      </div>

      <div class="file-type">

        <div class="file-type--row">
          PDF <el-progress  :stroke-width="10" :percentage="70" :format="format" />
        </div>

        <div class="file-type--row">
          WORD <el-progress  :stroke-width="10" :percentage="70" :format="format" />
        </div>

        <div class="file-type--row">
          PPT <el-progress  :stroke-width="10" :percentage="70" :format="format" />
        </div>
      </div>
    </div>
  </div>


  <el-dialog
    v-model="isUploadDialogVisible"
    title="Upload"
    width="30%"
  >
    
    <el-upload
      class="upload justify-center"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <!-- <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template> -->
    </el-upload>

    <template #footer>
      <span class="dialog-footer">
        <el-button @click="isUploadDialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="isUploadDialogVisible = false"
          >Confirm</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup() {

    const isShowMoreOperation = ref(false)
    const isUploadDialogVisible = ref(false)


    const format = (percentage: number): string => percentage === 100 ? 'Full' : `Full`
    const handleCommand = (command: string): void => {
      if (command.toLowerCase() === 'upload') {
        isUploadDialogVisible.value = true
      } else if (command.toLowerCase() === 'operation') {
        isShowMoreOperation.value = true
      }
    }
    const handleUpload = () => {

    }

    const handleSearch = () => {
      getFileList()
    }

    const getFileList = () => {

    }

    return {
      format,
      handleCommand,
      previewOnMobile: () => {},
      shareFileLinks: () => {},
      batchDownload: () => {},
      deleteFiles: () => {},
      handleSearch,
      isShowMoreOperation,
      isUploadDialogVisible
    }
  }
})
</script>