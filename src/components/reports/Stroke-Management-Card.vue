<template>
    <div class="report">
        <!-- 脑卒中管理卡 -->
        <table>
            <tr>
                <td colspan="8" class="title">脑卒中登记卡</td>
            </tr>
            <tr>
                <td colspan="4" style="padding-left: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">姓名：</span>
                    <span class="mark">{{ reportData.name }}</span>
                </td>
                <td colspan="4" style="text-align: right;padding-right: 40px;">
                    <span style="font-size: 16px;font-weight: bold;">编号：</span>
                    <span class="mark">
                        {{ reportData.phrid }}
                    </span>
                </td>
            </tr>
        </table>

        <table border="2" class="stripe">
            <tr>
                <td class="alignCenter">脑卒中类型</td>
                <td class="mark">{{ reportData.cerebralapoplexytype }}</td>
                <td class="alignCenter">脑卒中家族史</td>
                <td class="mark">{{ reportData.cerebralapoplexyfamilyhisName }}</td>
                <td class="alignCenter">合并其他症状</td>
                <td class="mark">{{ reportData.mergeothersName }}</td>
                <td class="alignCenter">危险因素</td>
                <td class="mark">{{ reportData.danger }}</td>
            </tr>
            <tr>
                <td class="alignCenter">身体活动受限</td>
                <td class="mark">{{ reportData.physicalrestraintName }}</td>
                <td class="alignCenter">创建人</td>
                <td class="mark">{{ reportData.createuserName }}</td>
                <td class="alignCenter">管辖机构</td>
                <td class="mark">{{ reportData.manaunitName }}</td>
                <td class="alignCenter">建档日期</td>
                <td class="mark">{{ $formatDate(reportData.createdate) }}</td>
            </tr>
            <tr>
                <td class="alignCenter">建档人员</td>
                <td class="mark">{{ reportData.createusertdName }}</td>
                <td class="alignCenter">建档机构</td>
                <td class="mark" colspan="5">{{ reportData.createunitName }}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    props: {
        reportData: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    data() {
        return {}
    },
    methods: {},
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
.report {
    .table-body-wrap {
        width: 1080px;
        margin: 0 auto;
    }
}
</style>
