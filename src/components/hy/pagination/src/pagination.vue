<template>
    <!-- 分页 -->
    <div class="hy-pagination">
        <!-- <el-pagination
            @current-change="handleCurrentChange"
            @size-change="handleSizeChange"
            :current-page="currentPage"
            :page-size="pageSize"
            :page-sizes="pageSizes"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination> -->
        <!-- company use -->
        <el-pagination
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total"
        >
        </el-pagination>
    </div>
</template>
<script>
export default {
    name: 'hy-pagination',
    props: {
        //当前页
        currentPage: {
            type: Number,
            default() {
                return 1
            }
        },
        //每页数量默认10
        pageSize: {
            type: Number,
            default() {
                return 10
            }
        },
        //每页数量调整
        pageSizes: {
            type: Array,
            default() {
                return [10, 15, 20, 25]
            }
        },
        //总数
        total: {
            type: Number,
            default() {
                return 10
            }
        }
    },
    data() {
        return {}
    },
    methods: {
        handleCurrentChange(val) {
            //换页
            this.$emit('current-change', val)
        },
        handleSizeChange(val) {
            //换每页数量
            this.$emit('size-change', val)
        }
    }
}
</script>
