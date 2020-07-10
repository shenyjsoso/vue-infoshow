<template>
    <div class="report">
        <!-- 老年人生活自理能力评估表 -->
        <table>
            <tr>
                <td colspan="6" class="title" style="font-weight: bold;">老年人生活自理能力评估表</td>
            </tr>
        </table>
        <table border="2" class="stripe">
			<tr>
				<td class="alignCenter" rowspan="2">评估事项、内容与评分</td>
				<td class="alignCenter" colspan="5">等级程度</td>
			</tr>
			<tr>
				<td class="alignCenter">可自理</td>
				<td class="alignCenter">轻度依赖</td>
				<td class="alignCenter">中度依赖</td>
				<td class="alignCenter">不能自理</td>
				<td class="alignCenter">判断评分</td>
			</tr>
			<tr>
				<td>
					<p class="describe">进餐：使用餐具将饭菜送入口、咀嚼、吞咽等活动</p>
					<p class="alignCenter">评分</p>
				</td>
				<td>
					<p class="describe">独立完成</p>
					<p class="alignCenter">0</p>
				</td>
				<td>
					<p class="describe">-</p>
					<p class="alignCenter">0</p>
				</td>
				<td>
					<p class="describe">需要协助，如切碎、搅拌食物等</p>
					<p class="alignCenter">3</p>
				</td>
				<td>
					<p class="describe">完全需要帮助</p>
					<p class="alignCenter">5</p>
				</td>
				<td class="mark alignCenter">{{reportData.jcfs}}</td>
			</tr>
			<tr>
				<td>
					<p class="describe">梳洗：梳头、洗脸、刷牙、剃须、洗澡等活动</p>
					<p class="alignCenter">评分</p>
				</td>
				<td>
					<p class="describe">独立完成</p>
					<p class="alignCenter">0</p>
				</td>
				<td>
					<p class="describe">能独立地洗头、梳头、洗脸、刷牙、剃须等；洗澡需要协助</p>
					<p class="alignCenter">1</p>
				</td>
				<td>
					<p class="describe">在协助下和适当的时间内，能完成部分梳洗活动</p>
					<p class="alignCenter">3</p>
				</td>
				<td>
					<p class="describe">完全需要帮助</p>
					<p class="alignCenter">7</p>
				</td>
				<td class="mark alignCenter">{{reportData.sxfs}}</td>
			</tr>
            <tr>
                <td>
                    <p class="describe">穿衣:穿衣裤、袜子、鞋子等活动</p>
                    <p class="alignCenter">评分</p>
                </td>
                <td>
                    <p class="describe">独立完成</p>
                    <p class="alignCenter">0</p>
                </td>
                <td>
                    <p class="describe">-</p>
                    <p class="alignCenter">0</p>
                </td>
                <td>
                    <p class="describe">需要协助，在适当的时间内完成部分穿衣</p>
                    <p class="alignCenter">3</p>
                </td>
                <td>
                    <p class="describe">完全需要帮助</p>
                    <p class="alignCenter">5</p>
                </td>
                <td class="mark alignCenter">{{reportData.cyfs}}</td>
            </tr>
			<tr>
				<td>
					<p class="describe">如厕：小便、大便等活动及自控</p>
					<p class="alignCenter">评分</p>
				</td>
				<td>
					<p class="describe">不需协助，可自控</p>
					<p class="alignCenter">0</p>
				</td>
				<td>
					<p class="describe">偶尔失禁，但基本上能如厕或使用便具</p>
					<p class="alignCenter">1</p>
				</td>
				<td>
					<p class="describe">经常失禁，在很多提示和协助下尚能如厕或使用便具</p>
					<p class="alignCenter">5</p>
				</td>
				<td>
					<p class="describe">完全失禁，完全需要帮助</p>
					<p class="alignCenter">10</p>
				</td>
				<td class="mark alignCenter">{{reportData.rcfs}}</td>
			</tr>
			<tr>
				<td>
					<p class="describe">活动：站立、室内行走、上下楼梯、户外活动</p>
					<p class="alignCenter">评分</p>
				</td>
				<td>
					<p class="describe">独立完成所有活动</p>
					<p class="alignCenter">0</p>
				</td>
				<td>
					<p class="describe">借助较小的外力或辅助装置能完成 站立、行走、上下楼梯等</p>
					<p class="alignCenter">1</p>
				</td>
				<td>
					<p class="describe">借助较大的外力才能完成站立、行走，不能上下楼梯</p>
					<p class="alignCenter">5</p>
				</td>
				<td>
					<p class="describe">卧床不起，活动完全需要帮助</p>
					<p class="alignCenter">10</p>
				</td>
				<td class="mark alignCenter">{{reportData.hdfs}}</td>
			</tr>
			<tr>
				<td class="alignCenter" colspan="5">总得分</td>
				<td class="mark alignCenter">{{reportData.zf}}</td>
			</tr>
        </table>
    </div>
</template>
<script>
    export default{
        props:{
            reportData:{
                type:Object,
                default(){
                    return {

                    }
                }
            }
        },
        data(){
            return{

            }
        },
        created(){
            // console.log(this.reportData)
        },
    }
</script>
<style lang="less" scoped>
    @import '../../assets/report-default.less';
    .report{
        table{
            width: 960px;
			.describe{
				height:75px;
			}
            tr{
                td{
                    p{
                        font-family: FZSSJW;
                    }
                }
            }
        }
    }
</style>