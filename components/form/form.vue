<template>
    <div>
        <el-form
            :model="ruleForm"
            :rules="rules"
            ref="ruleForm"
        >
            <el-form-item label="姓名：" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
            <el-form-item label="年龄：" prop="age">
                <el-input v-model="ruleForm.age"></el-input>
            </el-form-item>
        </el-form>
        <button @click="submitForm('ruleForm')">点我提交</button>
    </div>
</template>
<script>
import ElForm from './el-form';
import ElFormItem from './el-form-item';
import ElInput from './el-input';

export default {
    components: {
        ElForm, ElFormItem, ElInput
    },
    data() {
        return {
            ruleForm: {
                name: "",
                age: ""
            },
            rules: {
                name: [
                    {
                        required: true,
                        message: "请输入名称称"
                    },
                    {
                        min: 3,
                        max: 5,
                        message: "长度在 3 到 5 个字符"
                    }
                ],
                age: [
                    {
                        required: true,
                        message: "请输入年龄"
                    }
                ]
            }
        };
    },
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate(valid => {
                if (valid) {
                    alert("submit!");
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        }
    }
};
</script>