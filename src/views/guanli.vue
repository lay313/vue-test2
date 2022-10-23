<template>
  <div>
    <div>
      <el-row>
        <el-col :span="5">
          <el-input v-model="goodsItem.workerId" placeholder="名称"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="goodsItem.workerName" placeholder="123"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="goodsItem.storeId" placeholder="名称"></el-input>
        </el-col>
        <el-col :span="5">
          <el-input v-model="goodsItem.storeName" placeholder="123"></el-input>
        </el-col>
        <el-col :span="10">
          <el-button @click="getList">cx</el-button>
          <el-button>cz</el-button>
        </el-col>
      </el-row>
    </div>
    <div>liebiao</div>
    <el-table :table="tableData">
      <el-table-column label="创建时间" prop="createTime" />
      <el-table-column label="客户" prop="clientName" />
      <el-table-column label="创建人" prop="creator" />
      <el-table-column label="状态" prop="status" />
      <el-table-column label="合计金额" prop="amount" />
      <el-table-column label="备注" prop="remark" />
      <el-table-column label="操作">
        <el-button type="text" @click="goodsEdit">编辑</el-button>
        <el-button type="text" @click="goodsDel">删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      tableData: [
        /* toolbar: [],
        data: [],
        pageInfo: { pageNo: 1, pageSize: 10, totalCount: 0 } */
      ],
      queryInfo: {
        /* workerId: '',
        workerName: '',
        storeId: '',
        storeName: '' */
        /* query: '' */

        /* clientName: "",
        startDate: "",
        endDate: "",
        currPage: "",
        pageSize: "" */
      }
      /* goodsList: [], */
    };
  },
  /* mounted() {
    this.getList;
  }, */
  /* created() {
    this.getList();
  }, */
  methods: {
    loadData() {
      /* const query = Object.assign({
        currPage: this.tableData.pageInfo.pageNo,
        pageSize: this.tableData.pageInfo.pageSize,
      }); */
      /* this.$api.liebiao.getList(query).then((res) => {
        if (res === 200) {
          (this.tableData.data = res.data.list),
            (this.tableData.pageInfo.totalCount = res.data.total);
        } else {
          this.$msg(res.$msg, "error");
        }
      }); */
    },
    /* goodsEdit() {},
    goodsDel() {},
    reset() {
      this.goodsItem = { workerId: "", workerName: "", storeId: "" };
      this.tableData.pageInfo.pageNo = 1;
      this.loadData();
    }, */
    /* async getList() {
      const { data: res } = await axios.post("/api/bos/web/order/query", {
        params: this.queryInfo,
      });
      console.log(res);
    } */
  },
};
</script>

<style lang="less" scoped>
</style>