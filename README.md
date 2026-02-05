# OpenClaw Space

在 GitHub Codespace 中快速部署和运行 OpenClaw。

## ✨ 特性

- ⚡ 一键部署到 GitHub Codespace
- 🔄 自动保活机制（GitHub Actions）
- 🤖 完整的 OpenClaw AI 助手功能
- 🌍 支持多平台（Telegram、Discord、WhatsApp 等）

## 🚀 快速开始

### 方式一：GitHub Codespace（推荐）

1. 点击 GitHub 仓库的 **"Code"** 按钮
2. 选择 **"Create codespace on main"**
3. 等待环境自动安装依赖并启动 OpenClaw Gateway
4. Gateway 会在后台自动运行

### 方式二：本地安装（Linux/macOS/WSL2）

```bash
# 安装 OpenClaw
npm install -g openclaw@latest
# 或
pnpm add -g openclaw@latest

# 启动 Gateway
openclaw gateway

# 查看详细日志
openclaw gateway --verbose

# 后台运行（推荐）
nohup openclaw gateway --verbose > /tmp/openclaw-gateway.log 2>&1 &
```

## 💻 Gateway 配置

### 默认配置

- **默认端口**: `18789`
- **配置文件**: `~/.openclaw/openclaw.json`
- **UI 地址**: `http://127.0.0.1:18789/`

### Token 配置

OpenClaw Wizard 会在首次启动时自动生成 token。

**配置步骤：**

1. **启动 Gateway**：
   ```bash
   openclaw gateway --verbose
   ```

2. **读取配置文件**：
   ```bash
   code ~/.openclaw/openclaw.json
   ```

   ```json
   {
     "gateway": {
       "auth": {
         "mode": "token",
         "token": "..."
       }
     }
   }
   ```


## 📱 通道配置

### Telegram

```json
{
  "channels": {
    "telegram": {
      "enabled": true,
      "botToken": "YOUR_BOT_TOKEN"
    }
  }
}
```

### Discord

```json
{
  "channels": {
    "discord": {
      "enabled": true,
      "botToken": "YOUR_BOT_TOKEN"
    }
  }
}
```

### WhatsApp

```json
{
  "channels": {
    "whatsapp": {
      "enabled": true,
      "dmPolicy": "pairing"
    }
  }
}
```

## 🔐 安全配置

### 限制消息来源

```json
{
  "channels": {
    "whatsapp": {
      "allowFrom": ["+15550001234"]
    }
  },
  "messages": {
    "groupChat": {
      "mentionPatterns": ["@openclaw"]
    }
  }
}
```

## 🛠️ 开发与调试

### 查看 Gateway 状态

```bash
openclaw gateway status
```

### 查看日志

```bash
tail -f /tmp/openclaw-gateway.log
```

### 重启 Gateway

```bash
openclaw gateway restart
```

### 健康检查

```bash
openclaw health
```

## 🔄 保活机制

项目包含 GitHub Actions 工作流（`.github/workflows/keepalive.yml`）：

- 每 15 分钟自动 ping Codespace URL
- 防止环境因空闲而停止
- 可在 GitHub 仓库的 Actions 页面手动触发

## 📖 常用命令速查

| 命令 | 说明 |
|------|------|
| `openclaw gateway` | 启动 Gateway |
| `openclaw gateway --verbose` | 启动 Gateway（详细日志） |
| `openclaw gateway status` | 查看 Gateway 状态 |
| `openclaw gateway restart` | 重启 Gateway |
| `openclaw health` | 健康检查 |
| `openclaw message send --target xxx --message "hi"` | 发送测试消息 |

## 🤝 故障排除

### 端口未开放

确保 Codespace 端口已设为 **Public** 或 **Private**。

### Gateway 无法启动

```bash
# 查看详细错误
openclaw gateway --verbose

# 查看日志
tail -f /tmp/openclaw-gateway.log
```

### Token 错误

1. 重新启动 Gateway：`openclaw gateway`
2. 访问 UI Overview 页面获取新 token
3. 更新配置文件

### 端口冲突

```bash
# 强制终止占用端口的进程并启动
openclaw gateway --force
```

## 📚 参考资料

- [OpenClaw 官方文档](https://docs.openclaw.ai/)
- [Gateway 详细配置](https://docs.openclaw.ai/gateway)
- [Web UI 配置](https://docs.openclaw.ai/web)
- [快速入门指南](https://docs.openclaw.ai/start/quickstart)

## 📄 许可证

MIT License

## 🙏 致谢

- [OpenClaw](https://github.com/openclaw/openclaw) - AI 助手框架
- [Kejilion](https://github.com/kejilion) - 安装脚本灵感
