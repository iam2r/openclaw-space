# openclaw-space

## 安装
```bash
 bash <(curl -sL kejilion.sh) app openclaw
```

## 模型

### MiniMax的官方活动脚本
```bash
 curl -fsSL https://skyler-agent.github.io/oclaw/i.sh | bash
```
### 手动配置
```bash
# 复制gateway token 到UI Overview
code ~/.openclaw/openclaw.json
```

## 启动
```bash
 # 前台启动
 openclaw gateway --verbose
 # 改为后台运行，这样自动动后能运行服务
 nohup openclaw gateway --verbose > /tmp/openclaw-gateway.log 2>&1 &
```

## 配置
```bash
# "silent": false 改为 true 
code ~/.openclaw/devices/pending.json
```
