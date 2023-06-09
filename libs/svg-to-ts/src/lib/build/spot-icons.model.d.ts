export type spotIcons = 'chevron-down' | 'chevron-left' | 'chevron-right' | 'chevron-up' | 'sort-ascending' | 'sort-descending' | 'triangle-down' | 'triangle-up-and-down' | 'triangle-up' | 'bar-chart-2' | 'bar-chart-3' | 'bar-chart-4' | 'bar-chart-5' | 'bar-chart-6' | 'bar-chart' | 'doughnut-chart-2' | 'doughnut-chart' | 'gauge' | 'line-chart-2' | 'line-chart-3' | 'line-chart' | 'line-graph-selected' | 'line-graph' | 'pie-chart-2' | 'pie-chart' | 'status-bar-chart' | 'summary-card-1' | 'summary-card-10' | 'summary-card-11' | 'summary-card-12' | 'summary-card-2' | 'summary-card-3' | 'summary-card-4' | 'summary-card-5' | 'summary-card-6' | 'summary-card-7' | 'summary-card-8' | 'summary-card-9' | 'table-2' | 'table-3' | 'table-4' | 'table-5' | 'table-6' | 'table-7' | 'table-8' | 'table' | 'world-map' | 'alb' | 'ansible' | 'api' | 'application-gateway' | 'asg' | 'aws' | 'azure' | 'backend-service' | 'batch' | 'beanstalk' | 'cloud-front' | 'cloud-provider' | 'cloudformation' | 'cloudtrail' | 'cloudwatch' | 'code-deploy' | 'data-science' | 'datasets' | 'docker' | 'dynamo-db' | 'ec-2' | 'ecs' | 'eks' | 'elasti-cache' | 'elastic-search' | 'elb' | 'elbv-2' | 'emr' | 'fargate' | 'gcp' | 'git-lab' | 'github' | 'gke' | 'google' | 'iam' | 'jenkins' | 'json' | 'k-8-s' | 'kops-full' | 'kops' | 'microsoft' | 'rancher' | 'rds' | 'red-shift' | 'resource-group-red' | 'resource-group' | 'route-53' | 'scale-set' | 'ses' | 'slack' | 'sns' | 'spark-centered' | 'terraform' | 'vpc' | 'webhook' | 'abu-dhabi' | 'ae' | 'au' | 'bh' | 'br' | 'ca' | 'ch' | 'cn' | 'de' | 'es' | 'eu' | 'fr' | 'hk' | 'id' | 'ie' | 'in' | 'israel' | 'it' | 'jp' | 'kr' | 'mexico' | 'netherlands' | 'no' | 'nz' | 'poland' | 'qa' | 'se' | 'singapore' | 'taiwan' | 'uk' | 'us' | 'za' | 'account' | 'add-profile' | 'add' | 'air-plane' | 'announcement' | 'archive-blue' | 'archive' | 'audit' | 'bell' | 'blog' | 'calendar' | 'close' | 'copy' | 'customize' | 'delete' | 'detach' | 'document' | 'documentation' | 'download' | 'dp-calendar' | 'drag-handle' | 'drag' | 'edit' | 'ellipses' | 'email-all-read' | 'email-black' | 'email-unread' | 'email' | 'empty-flag' | 'exclude' | 'exit' | 'export' | 'flag-outline-bold' | 'flag' | 'full-screen' | 'generate' | 'get-started' | 'globe' | 'go-to-link' | 'health' | 'hide' | 'import' | 'include' | 'info' | 'instances-horizontal' | 'instances' | 'lock' | 'logout' | 'magic' | 'manage-user' | 'message' | 'minimize' | 'more' | 'move-down' | 'move-up' | 'move' | 'note' | 'notification' | 'org-outline' | 'organization' | 'post-add' | 'profile' | 'question-mark' | 'refresh' | 'reset' | 'resume' | 'roadmap-fill' | 'save' | 'search' | 'searching' | 'security-alert' | 'septagon' | 'settings-pro' | 'settings' | 'share' | 'show' | 'signout' | 'slack-outline' | 'switch-up-down' | 'switch' | 'template-add-empty' | 'template-copy' | 'thumbs-up-stars' | 'time' | 'timer' | 'unflag' | 'unfold-less' | 'unfold-more' | 'unread-indicator' | 'upload' | 'user-outline' | 'user-profile' | 'user' | 'users' | 'walkthrough' | 'welcome' | 'additional-services' | 'administration' | 'analytics' | 'api-nav' | 'barrel' | 'budget' | 'cloud' | 'clusters' | 'compliance' | 'configuration' | 'dashboard' | 'events' | 'folder' | 'graph' | 'group' | 'groups' | 'hamburger' | 'inherit' | 'insights' | 'inventory' | 'jobs' | 'layers' | 'lightbulb' | 'payments' | 'report' | 'risk-analysis' | 'roadmap' | 'rocket' | 'settings-nav' | 'spectrum' | 'topology' | 'trends' | 'spot-by-netapp-black' | 'spot-by-netapp-white' | 'spot-cd' | 'spot-cloud-analyzer' | 'spot-cloud-checkr' | 'spot-cloud-logo' | 'spot-connect' | 'spot-core-services' | 'spot-eco' | 'spot-elasticode' | 'spot-elastigroup' | 'spot-icon' | 'spot-logo-white' | 'spot-logo' | 'spot-managed-instance' | 'spot-migration' | 'spot-ocean-spark' | 'spot-ocean' | 'spot-overview' | 'spot-pc' | 'spot-security' | 'spot-settings' | 'spot-storage' | 'spot-story-book' | 'storage-operations' | 'active' | 'arrow' | 'attention' | 'cancel' | 'connected-successfully' | 'connected' | 'connection-lost' | 'deny-cursor' | 'error' | 'exclamation-mark' | 'finish-flag' | 'hour-glass' | 'not-connected' | 'pause' | 'play-outline' | 'play' | 'processing' | 'recycle' | 'thumbsup' | 'v';
export interface SpotIcons {
    name: SpotIconsName;
    data: string;
}
export declare enum SpotIconsName {
    CHEVRON_DOWN = "chevron-down",
    CHEVRON_LEFT = "chevron-left",
    CHEVRON_RIGHT = "chevron-right",
    CHEVRON_UP = "chevron-up",
    SORT_ASCENDING = "sort-ascending",
    SORT_DESCENDING = "sort-descending",
    TRIANGLE_DOWN = "triangle-down",
    TRIANGLE_UP_AND_DOWN = "triangle-up-and-down",
    TRIANGLE_UP = "triangle-up",
    BAR_CHART_2 = "bar-chart-2",
    BAR_CHART_3 = "bar-chart-3",
    BAR_CHART_4 = "bar-chart-4",
    BAR_CHART_5 = "bar-chart-5",
    BAR_CHART_6 = "bar-chart-6",
    BAR_CHART = "bar-chart",
    DOUGHNUT_CHART_2 = "doughnut-chart-2",
    DOUGHNUT_CHART = "doughnut-chart",
    GAUGE = "gauge",
    LINE_CHART_2 = "line-chart-2",
    LINE_CHART_3 = "line-chart-3",
    LINE_CHART = "line-chart",
    LINE_GRAPH_SELECTED = "line-graph-selected",
    LINE_GRAPH = "line-graph",
    PIE_CHART_2 = "pie-chart-2",
    PIE_CHART = "pie-chart",
    STATUS_BAR_CHART = "status-bar-chart",
    SUMMARY_CARD_1 = "summary-card-1",
    SUMMARY_CARD_10 = "summary-card-10",
    SUMMARY_CARD_11 = "summary-card-11",
    SUMMARY_CARD_12 = "summary-card-12",
    SUMMARY_CARD_2 = "summary-card-2",
    SUMMARY_CARD_3 = "summary-card-3",
    SUMMARY_CARD_4 = "summary-card-4",
    SUMMARY_CARD_5 = "summary-card-5",
    SUMMARY_CARD_6 = "summary-card-6",
    SUMMARY_CARD_7 = "summary-card-7",
    SUMMARY_CARD_8 = "summary-card-8",
    SUMMARY_CARD_9 = "summary-card-9",
    TABLE_2 = "table-2",
    TABLE_3 = "table-3",
    TABLE_4 = "table-4",
    TABLE_5 = "table-5",
    TABLE_6 = "table-6",
    TABLE_7 = "table-7",
    TABLE_8 = "table-8",
    TABLE = "table",
    WORLD_MAP = "world-map",
    ALB = "alb",
    ANSIBLE = "ansible",
    API = "api",
    APPLICATION_GATEWAY = "application-gateway",
    ASG = "asg",
    AWS = "aws",
    AZURE = "azure",
    BACKEND_SERVICE = "backend-service",
    BATCH = "batch",
    BEANSTALK = "beanstalk",
    CLOUD_FRONT = "cloud-front",
    CLOUD_PROVIDER = "cloud-provider",
    CLOUDFORMATION = "cloudformation",
    CLOUDTRAIL = "cloudtrail",
    CLOUDWATCH = "cloudwatch",
    CODE_DEPLOY = "code-deploy",
    DATA_SCIENCE = "data-science",
    DATASETS = "datasets",
    DOCKER = "docker",
    DYNAMO_DB = "dynamo-db",
    EC_2 = "ec-2",
    ECS = "ecs",
    EKS = "eks",
    ELASTI_CACHE = "elasti-cache",
    ELASTIC_SEARCH = "elastic-search",
    ELB = "elb",
    ELBV_2 = "elbv-2",
    EMR = "emr",
    FARGATE = "fargate",
    GCP = "gcp",
    GIT_LAB = "git-lab",
    GITHUB = "github",
    GKE = "gke",
    GOOGLE = "google",
    IAM = "iam",
    JENKINS = "jenkins",
    JSON = "json",
    K_8_S = "k-8-s",
    KOPS_FULL = "kops-full",
    KOPS = "kops",
    MICROSOFT = "microsoft",
    RANCHER = "rancher",
    RDS = "rds",
    RED_SHIFT = "red-shift",
    RESOURCE_GROUP_RED = "resource-group-red",
    RESOURCE_GROUP = "resource-group",
    ROUTE_53 = "route-53",
    SCALE_SET = "scale-set",
    SES = "ses",
    SLACK = "slack",
    SNS = "sns",
    SPARK_CENTERED = "spark-centered",
    TERRAFORM = "terraform",
    VPC = "vpc",
    WEBHOOK = "webhook",
    ABU_DHABI = "abu-dhabi",
    AE = "ae",
    AU = "au",
    BH = "bh",
    BR = "br",
    CA = "ca",
    CH = "ch",
    CN = "cn",
    DE = "de",
    ES = "es",
    EU = "eu",
    FR = "fr",
    HK = "hk",
    ID = "id",
    IE = "ie",
    IN = "in",
    ISRAEL = "israel",
    IT = "it",
    JP = "jp",
    KR = "kr",
    MEXICO = "mexico",
    NETHERLANDS = "netherlands",
    NO = "no",
    NZ = "nz",
    POLAND = "poland",
    QA = "qa",
    SE = "se",
    SINGAPORE = "singapore",
    TAIWAN = "taiwan",
    UK = "uk",
    US = "us",
    ZA = "za",
    ACCOUNT = "account",
    ADD_PROFILE = "add-profile",
    ADD = "add",
    AIR_PLANE = "air-plane",
    ANNOUNCEMENT = "announcement",
    ARCHIVE_BLUE = "archive-blue",
    ARCHIVE = "archive",
    AUDIT = "audit",
    BELL = "bell",
    BLOG = "blog",
    CALENDAR = "calendar",
    CLOSE = "close",
    COPY = "copy",
    CUSTOMIZE = "customize",
    DELETE = "delete",
    DETACH = "detach",
    DOCUMENT = "document",
    DOCUMENTATION = "documentation",
    DOWNLOAD = "download",
    DP_CALENDAR = "dp-calendar",
    DRAG_HANDLE = "drag-handle",
    DRAG = "drag",
    EDIT = "edit",
    ELLIPSES = "ellipses",
    EMAIL_ALL_READ = "email-all-read",
    EMAIL_BLACK = "email-black",
    EMAIL_UNREAD = "email-unread",
    EMAIL = "email",
    EMPTY_FLAG = "empty-flag",
    EXCLUDE = "exclude",
    EXIT = "exit",
    EXPORT = "export",
    FLAG_OUTLINE_BOLD = "flag-outline-bold",
    FLAG = "flag",
    FULL_SCREEN = "full-screen",
    GENERATE = "generate",
    GET_STARTED = "get-started",
    GLOBE = "globe",
    GO_TO_LINK = "go-to-link",
    HEALTH = "health",
    HIDE = "hide",
    IMPORT = "import",
    INCLUDE = "include",
    INFO = "info",
    INSTANCES_HORIZONTAL = "instances-horizontal",
    INSTANCES = "instances",
    LOCK = "lock",
    LOGOUT = "logout",
    MAGIC = "magic",
    MANAGE_USER = "manage-user",
    MESSAGE = "message",
    MINIMIZE = "minimize",
    MORE = "more",
    MOVE_DOWN = "move-down",
    MOVE_UP = "move-up",
    MOVE = "move",
    NOTE = "note",
    NOTIFICATION = "notification",
    ORG_OUTLINE = "org-outline",
    ORGANIZATION = "organization",
    POST_ADD = "post-add",
    PROFILE = "profile",
    QUESTION_MARK = "question-mark",
    REFRESH = "refresh",
    RESET = "reset",
    RESUME = "resume",
    ROADMAP_FILL = "roadmap-fill",
    SAVE = "save",
    SEARCH = "search",
    SEARCHING = "searching",
    SECURITY_ALERT = "security-alert",
    SEPTAGON = "septagon",
    SETTINGS_PRO = "settings-pro",
    SETTINGS = "settings",
    SHARE = "share",
    SHOW = "show",
    SIGNOUT = "signout",
    SLACK_OUTLINE = "slack-outline",
    SWITCH_UP_DOWN = "switch-up-down",
    SWITCH = "switch",
    TEMPLATE_ADD_EMPTY = "template-add-empty",
    TEMPLATE_COPY = "template-copy",
    THUMBS_UP_STARS = "thumbs-up-stars",
    TIME = "time",
    TIMER = "timer",
    UNFLAG = "unflag",
    UNFOLD_LESS = "unfold-less",
    UNFOLD_MORE = "unfold-more",
    UNREAD_INDICATOR = "unread-indicator",
    UPLOAD = "upload",
    USER_OUTLINE = "user-outline",
    USER_PROFILE = "user-profile",
    USER = "user",
    USERS = "users",
    WALKTHROUGH = "walkthrough",
    WELCOME = "welcome",
    ADDITIONAL_SERVICES = "additional-services",
    ADMINISTRATION = "administration",
    ANALYTICS = "analytics",
    API_NAV = "api-nav",
    BARREL = "barrel",
    BUDGET = "budget",
    CLOUD = "cloud",
    CLUSTERS = "clusters",
    COMPLIANCE = "compliance",
    CONFIGURATION = "configuration",
    DASHBOARD = "dashboard",
    EVENTS = "events",
    FOLDER = "folder",
    GRAPH = "graph",
    GROUP = "group",
    GROUPS = "groups",
    HAMBURGER = "hamburger",
    INHERIT = "inherit",
    INSIGHTS = "insights",
    INVENTORY = "inventory",
    JOBS = "jobs",
    LAYERS = "layers",
    LIGHTBULB = "lightbulb",
    PAYMENTS = "payments",
    REPORT = "report",
    RISK_ANALYSIS = "risk-analysis",
    ROADMAP = "roadmap",
    ROCKET = "rocket",
    SETTINGS_NAV = "settings-nav",
    SPECTRUM = "spectrum",
    TOPOLOGY = "topology",
    TRENDS = "trends",
    SPOT_BY_NETAPP_BLACK = "spot-by-netapp-black",
    SPOT_BY_NETAPP_WHITE = "spot-by-netapp-white",
    SPOT_CD = "spot-cd",
    SPOT_CLOUD_ANALYZER = "spot-cloud-analyzer",
    SPOT_CLOUD_CHECKR = "spot-cloud-checkr",
    SPOT_CLOUD_LOGO = "spot-cloud-logo",
    SPOT_CONNECT = "spot-connect",
    SPOT_CORE_SERVICES = "spot-core-services",
    SPOT_ECO = "spot-eco",
    SPOT_ELASTICODE = "spot-elasticode",
    SPOT_ELASTIGROUP = "spot-elastigroup",
    SPOT_ICON = "spot-icon",
    SPOT_LOGO_WHITE = "spot-logo-white",
    SPOT_LOGO = "spot-logo",
    SPOT_MANAGED_INSTANCE = "spot-managed-instance",
    SPOT_MIGRATION = "spot-migration",
    SPOT_OCEAN_SPARK = "spot-ocean-spark",
    SPOT_OCEAN = "spot-ocean",
    SPOT_OVERVIEW = "spot-overview",
    SPOT_PC = "spot-pc",
    SPOT_SECURITY = "spot-security",
    SPOT_SETTINGS = "spot-settings",
    SPOT_STORAGE = "spot-storage",
    SPOT_STORY_BOOK = "spot-story-book",
    STORAGE_OPERATIONS = "storage-operations",
    ACTIVE = "active",
    ARROW = "arrow",
    ATTENTION = "attention",
    CANCEL = "cancel",
    CONNECTED_SUCCESSFULLY = "connected-successfully",
    CONNECTED = "connected",
    CONNECTION_LOST = "connection-lost",
    DENY_CURSOR = "deny-cursor",
    ERROR = "error",
    EXCLAMATION_MARK = "exclamation-mark",
    FINISH_FLAG = "finish-flag",
    HOUR_GLASS = "hour-glass",
    NOT_CONNECTED = "not-connected",
    PAUSE = "pause",
    PLAY_OUTLINE = "play-outline",
    PLAY = "play",
    PROCESSING = "processing",
    RECYCLE = "recycle",
    THUMBSUP = "thumbsup",
    V = "v"
}
