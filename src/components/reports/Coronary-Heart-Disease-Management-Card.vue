<template>
    <div class="report">
        <!-- 冠心病管理卡 -->
        <table>
            <tr>
                <td colspan="8" class="title">冠心病登记卡</td>
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
                <td class="alignCenter">冠心病类型</td>
                <td class="mark">{{ reportData.coronarytype }}</td>
                <td class="alignCenter">冠心病家族史</td>
                <td class="mark">{{ reportData.coronaryfamilyhistoryName }}</td>
                <td class="alignCenter">脑卒中类型</td>
                <td class="mark">{{ reportData.cerebralapoplexytype }}</td>
                <td class="alignCenter">脑卒中家族史</td>
                <td class="mark">
                    {{ reportData.cerebralapoplexyfamilyhisName }}
                </td>
            </tr>
            <tr>
                <td class="alignCenter">合并其他症状</td>
                <td class="mark">{{ reportData.mergeothersName }}</td>
                <td class="alignCenter">危险因素</td>
                <td class="mark">{{ reportData.danger }}</td>
                <td class="alignCenter">是否冠心病</td>
                <td class="mark">{{ reportData.iscoronaryName }}</td>
                <td class="alignCenter">是否脑卒中</td>
                <td class="mark">{{ reportData.iscerebralapoplexyName }}</td>
            </tr>
            <tr>
                <td class="alignCenter">团队医生</td>
                <td class="mark">{{ reportData.manadoctoridtdName }}</td>
                <td class="alignCenter">管理团队</td>
                <td class="mark">{{ reportData.manaunitName }}</td>
                <td class="alignCenter">建档人员</td>
                <td class="mark">{{ reportData.createusertdName }}</td>
                <td class="alignCenter">建档机构</td>
                <td class="mark">{{ reportData.manaunitName }}</td>
            </tr>
            <tr>
                <td class="alignCenter">创建人</td>
                <td class="mark">{{ reportData.createuserName }}</td>
                <td class="alignCenter">创建机构</td>
                <td class="mark">{{ reportData.createunitName }}</td>
                <td class="alignCenter">建档日期</td>
                <td class="mark">{{ $formatDate(reportData.createdate) }}</td>
                <td class="alignCenter">档案状态</td>
                <td class="mark">{{ reportData.statusName }}</td>
            </tr>
            <tr>
                <td class="alignCenter">最后修改人</td>
                <td class="mark">{{ reportData.lastmodifyusertd }}</td>
                <td class="alignCenter">最后修改日期</td>
                <td class="mark">{{ $formatDate(reportData.lastmodifydate) }}</td>
                <td class="alignCenter">最后修改单位</td>
                <td class="mark" colspan="3">{{ reportData.lastmodifyunittd }}</td>
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
}
</script>
<style lang="less" scoped>
@import '../../assets/report-default.less';
// .report{
//     table{
//         width: 850px;
//     }
// }
</style>
